JsOsaDAS1.001.00bplist00ÑVscript_"
function inherit(subClass, superClass) {
    var __ = function() {};
    __.prototype = new superClass();
    subClass.prototype = new __();
    extend(subClass, superClass);
}

function LOG(obj) {
    $.NSLog('%@', obj);
}

function extend(target) {
    var sources = Array.prototype.slice.call(arguments, 1);
    for (var i = 0, max = sources.length; i < max; i++) {
        var source = sources[i];
        for (var key in source) {
            target[key] = source[key];
        }
    }
    return source;
}
function JSView() {}

JSView.prototype.setFrame = function(param) {
    var frame = this.getFrame();

    if ('x' in param) frame.origin.x = param.x;
    if ('y' in param) frame.origin.y = param.y;
    if ('width' in param) frame.size.width = param.width;
    if ('height' in param) frame.size.height = param.height;

    this.cocoa_.setFrame(frame, true);
};

JSView.prototype.getFrame = function(frame) {
    return this.cocoa_.frame
};

JSView.prototype.append = function(child) {
    this.cocoa_.addSubview(child.cocoa_);
};

JSView.prototype.appendTo = function(parent) {
    parent.append(this);
};

JSView.prototype.getParent = function() {
    return this.cocoa_.superview;
};

JSView.prototype.getChildren = function() {
    return this.cocoa_.subviews.js;
};

JSView.prototype.remove = function() {
    this.cocoa_.removeFromSuperview();
};

JSView.prototype.removeChild = function(child) {
    child.cocoa_.removeFromSuperview();
};

JSView.prototype.__defineGetter__('parent', function() {
    return this.getParent();
});

JSView.prototype.__defineGetter__('children', function() {
    return this.getChildren();
});
/** 
 *	@include ./JSView.js
 */
function JSContainerView() {}
inherit(JSContainerView, JSView);

JSContainerView.prototype.appendTo = function(parent) {
    throw new Error('JSContainerView can not be a subview.');
};

JSContainerView.prototype.remove = function() {
    throw new Error('JSContainerView can not be a subview.');
};

JSContainerView.prototype.getParent = function() {
    throw new Error('JSContainerView can not be a subview.');
};
/**
 *	@include ./JSContainerView.js
 */

ObjC.import('Cocoa');

function JSWindow(param) {
    var title, x, y, width, height, resizable, closable, typeMask;

    param = param || {},
    title = param.title || 'JSWindow',
    x = parseInt(param.x) || 0,
    y = parseInt(param.y) || 0,
    width = parseInt(param.width) || 500,
    height = parseInt(param.height) || 500,
    resizable = param.resizable == null ? true : !!param.resizable;
    closable = param.closable == null ? true : !!param.closable;

    typeMask = $.NSTitledWindowMask;
    if (resizable) {
        typeMask |= $.NSResizableWindowMask
    }
    if (closable) {
        typeMask |= $.NSClosableWindowMask
    }

    this.cocoa_ = $.NSWindow.alloc.initWithContentRectStyleMaskBackingDefer(
        $.NSMakeRect(x, y, width, height),
        typeMask,
        $.NSBackingStoreBuffered,
        false
    );

    this.cocoa_.title = title;
    this.cocoa_.makeKeyAndOrderFront(this.cocoa_);
}
inherit(JSWindow, JSContainerView);

JSWindow.prototype.setFrame = function(param) {
    var frame = this.getFrame();

    if ('x' in param) frame.origin.x = param.x;
    if ('y' in param) frame.origin.y = param.y;
    if ('width' in param) frame.size.width = param.width;
    if ('height' in param) frame.size.height = param.height;

    this.cocoa_.setFrameDisplay(frame, true);
};

JSWindow.prototype.append = function(child) {
    this.cocoa_.contentView.addSubview(child.cocoa_);
};

JSWindow.prototype.getChildren = function() {
    return this.cocoa_.contentView.subviews.js;
};
/** 
 *	@include ./JSView.js
 */
function JSNoContentView() {}
inherit(JSNoContentView, JSView);

JSNoContentView.prototype.append = function(child) {
    throw new Error('JSNoContentView can have any subviews.');
};

JSNoContentView.prototype.removeChild = function() {
    throw new Error('JSNoContentView can have any subviews.');
};

JSNoContentView.prototype.getChildren = function() {
    throw new Error('JSNoContentView can have any subviews.');
};
/**
 *	@include ./JSNoContentView.js
 */

ObjC.import('Cocoa');

function JSButton(param) {
    var title, x, y, width, height;

    param = param || {},
    title = param.title || 'JSButton',
    x = parseInt(param.x) || 0,
    y = parseInt(param.y) || 0,
    width = parseInt(param.width) || 100,
    height = parseInt(param.height) || 25;

    this.cocoa_ = $.NSButton.alloc.initWithFrame(
        $.NSMakeRect(x, y, width, height)
    );
    this.cocoa_.bezelStyle = $.NSRoundedBezelStyle;
    this.cocoa_.buttonType = $.NSMomentaryLightButton;
    this.cocoa_.title = title;
}
inherit(JSButton, JSNoContentView);
/**
 *	@include ./JSNoContentView.js
 */

ObjC.import('Cocoa');

function JSTextField(param) {
    var x, y, width, height, align, value, color;

    param = param || {},
    x = parseInt(param.x) || 0,
    y = parseInt(param.y) || 0,
    width = parseInt(param.width) || 200,
    height = parseInt(param.height) || 25,
    align = param.align || JSTextField.Align.Left;
    value = param.value || '';
    color = param.color || $.NSColor.blackColor

    this.cocoa_ = $.NSTextField.alloc.initWithFrame(
        $.NSMakeRect(x, y, width, height)
    );
    this.cocoa_.setAlignment(align);
    this.cocoa_.setStringValue(value);
    this.cocoa_.setTextColor(color);
}
inherit(JSTextField, JSNoContentView);

JSTextField.Align = {
    Left: 0,
    Right: 1,
    Center: 2,
    Justified: 3,
    Natural: 4
};
/**
 *	@include ./JSTextField.js
 */

ObjC.import('Cocoa');

function JSTextLabel(param) {
    param = param || {};

    JSTextField.call(this, param);

    this.cocoa_.setBezeled(false);
    this.cocoa_.setDrawsBackground(false);
    this.cocoa_.setEditable(false);
    this.cocoa_.setSelectable(false);
}
inherit(JSTextLabel, JSTextField);
ObjC.registerSubclass({
    name: 'JSAppDelegate',
    methods: {
        'applicationDidFinishLaunching': {
            types: ['void', []],
            implementation: function () {

            }
        }
    }
});
function run() {
    var appDelegate = $.AppDelegate.alloc.init;
    appDelegate.applicationDidFinishLaunching();
}
/*
 *	@include ./JSutil.js
 *  @include ./JSWindow.js
 *  @include ./JSButton.js
 *  @include ./JSTextField.js
 *  @include ./JSTextLabel.js
 *  @include ./JSAppDelegate.js
 */

/**
 *  @include ./JSmain.js
 */
/*
 *  @include ../src/jsco.js
 */

ObjC.registerSubclass({
    name: 'AppDelegate',
    superclass: 'JSAppDelegate',
    methods: {
        'applicationDidFinishLaunching': {
            types: ['void', []],
            implementation: function () {
                var window = new JSWindow({
                    width: 500,
                    height: 250,
                    x: 200,
                    y: 250,
                    title: 'Notepad Sample',
                    resizable: false
                });

                var saveBtn = new JSButton({
                    width: 60,
                    height: 30,
                    x: 360,
                    y: 215,
                    title: 'Save'
                });
                saveBtn.cocoa_.target = this;
                saveBtn.cocoa_.action = 'saveBtnDidClicked';
                saveBtn.appendTo(window);

                var label = new JSTextLabel({
                    width: 300,
                    height: 30,
                    x: 30,
                    y: 210,
                    value: 'Input something, and Push \'Save\' button.'
                });
                label.appendTo(window);

                var labelState = new JSTextLabel({
                    width: 60,
                    height: 30,
                    x: 420,
                    y: 210,
                    value: 'Saved.',
                    align: JSTextLabel.Align.Right,
                    color: $.NSColor.blueColor
                });
                labelState.appendTo(window);

                var field = new JSTextField({
                    width: 500,
                    height: 210,
                    x: 0,
                    y: 0
                });
                field.appendTo(window);

                var userDefault = $.NSUserDefaults.standardUserDefaults;
                field.cocoa_.setStringValue(userDefault.stringForKey('value'));
            }
        },
        'saveBtnDidClicked': {
            types: ['void', ['id']],
            implementation: function (sender) {
                var userDefault = $.NSUserDefaults.standardUserDefaults;

                userDefault.setObjectForKey(field.cocoa_.stringValue, 'value');
                userDefault.synchronize;
            }
        }
    }
});                              ""jscr  úÞÞ­