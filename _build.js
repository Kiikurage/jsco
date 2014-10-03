
ObjC.import('Cocoa');
(function() {
    var DEFAULT_STYLE_MASK = $.NSTitledWindowMask | $.NSClosableWindowMask | $.NSMiniaturizableWindowMask;

    ObjC.registerSubclass({
        name: 'KWindow',
        superclass: 'NSWindow',
        properties: {
            left: 'Int',
            top: 'Int',
            width: 'Int',
            height: 'Int'
        },
        methods: {
            'init:': {
                types: ['id', ['NSDictionary']],
                implementation: function(param) {
                    var param = ObjC.deepUnwrap(param) || {},
                        title = param.title || "",
                        top = param.top || 0,
                        left = param.left || 0,
                        width = param.width || 600,
                        height = param.height || 400,
                        styleMask = param.styleMask || DEFAULT_STYLE_MASK;

                    var _this = ObjC.super(this).initWithContentRectStyleMaskBackingDefer(
                        $.NSMakeRect(left, top, width, height),
                        styleMask,
                        $.NSBackingStoreBuffered,
                        false
                    );

                    _this.title = title;
                    _this.makeKeyAndOrderFront(_this);

                    return _this
                }
            },
            'left': {
                types: ['Int', []],
                implementation: function() {
                    return this.frame.origin.x;
                }
            },
            'setLeft:': {
                types: ['void', ['Int']],
                implementation: function(left) {
                    this.setFrameOrigin($.NSMakePoint(left, this.top));
                }
            },
            'top': {
                types: ['Int', []],
                implementation: function() {
                    return this.frame.origin.y;
                }
            },
            'setTop:': {
                types: ['void', ['Int']],
                implementation: function(top) {
                    this.setFrameOrigin($.NSMakePoint(this.left, top));
                }
            },
            'width': {
                types: ['Int', []],
                implementation: function() {
                    return this.frame.size.width;
                }
            },
            'setWidth:': {
                types: ['void', ['Int']],
                implementation: function(width) {
                    this.setFrameDisplay($.NSMakeRect(this.left, this.top, width, this.height), true);
                }
            },
            'height': {
                types: ['Int', []],
                implementation: function() {
                    return this.frame.size.height;
                }
            },
            'setHeight:': {
                types: ['void', ['Int']],
                implementation: function(height) {
                    this.setFrameDisplay($.NSMakeRect(this.left, this.top, this.width, height), true);
                }
            }
        }
    });
}());
ObjC.import('Cocoa');
(function() {
    ObjC.registerSubclass({
        name: 'KButton',
        superclass: 'NSButton',
        properties: {
            left: 'Int',
            top: 'Int',
            width: 'Int',
            height: 'Int'
        },
        methods: {
            'init:': {
                types: ['id', ['NSDictionary']],
                implementation: function(param) {
                    var param = ObjC.deepUnwrap(param) || {},
                        title = param.title || "",
                        top = param.top || 0,
                        left = param.left || 0,
                        width = param.width || 600,
                        height = param.height || 400,
                        bezelStyle = param.bezelStyle || $.NSRoundedBezelStyle,
                        buttonType = param.buttonType || $.NSMomentaryLightButton;

                    var _this = ObjC.super(this).initWithFrame(
                        $.NSMakeRect(left, top, width, height)
                    );

                    _this.title = title;
                    _this.bezelStyle = bezelStyle;
                    _this.buttonType = buttonType;

                    return _this
                }
            },
            'left': {
                types: ['Int', []],
                implementation: function() {
                    return this.frame.origin.x;
                }
            },
            'setLeft:': {
                types: ['void', ['Int']],
                implementation: function(left) {
                    this.setFrameOrigin($.NSMakePoint(left, this.top));
                }
            },
            'top': {
                types: ['Int', []],
                implementation: function() {
                    return this.frame.origin.y;
                }
            },
            'setTop:': {
                types: ['void', ['Int']],
                implementation: function(top) {
                    this.setFrameOrigin($.NSMakePoint(this.left, top));
                }
            },
            'width': {
                types: ['Int', []],
                implementation: function() {
                    return this.frame.size.width;
                }
            },
            'setWidth:': {
                types: ['void', ['Int']],
                implementation: function(width) {
                    this.setFrameDisplay($.NSMakeRect(this.left, this.top, width, this.height), true);
                }
            },
            'height': {
                types: ['Int', []],
                implementation: function() {
                    return this.frame.size.height;
                }
            },
            'setHeight:': {
                types: ['void', ['Int']],
                implementation: function(height) {
                    this.setFrameDisplay($.NSMakeRect(this.left, this.top, this.width, height), true);
                }
            }
        }
    });
}());
/*
 *  @include ./KWindow.js
 *  @include ./KButton.js
 */
ObjC.import('Cocoa');

ObjC.registerSubclass({
    name: "AppDelegate",
    methods: {
        "btnClickHandler": {
            types: ["void", ["id"]],
            implementation: function(sender) {
                $.NSApplication.sharedApplication.terminate(this);
            }
        }
    }
});

ObjC.registerSubclass({
    name: "MyNotification",
    methods: {
        "userNotificationCenter:shouldPresentNotification:": {
            types: ["bool", ["id", "id"]],
            implementation: function(center, notification) {
                return true;
            }
        }
    }
});

var myNotification = $.MyNotification.alloc.init;

$.NSUserNotificationCenter.defaultUserNotificationCenter.delegate = myNotification;

function showNotification(title, msg) {
    var notification = $.NSUserNotification.alloc.init;
    notification.title = title;
    notification.informativeText = msg;
    notification.soundName = $.NSUserNotificationDefaultSoundName;
    $.NSUserNotificationCenter.defaultUserNotificationCenter.deliverNotification(notification);
}

var window = $.KWindow.alloc.init({
    left: 200,
    top: 100,
    width: 200,
    height: 120,
    title: 'KLibrary Sample'
});

var button = $.KButton.alloc.init({
    left: 50,
    top: 50,
    width: 100,
    height: 20,
    title: 'Push Me!'
});
button.target = $.AppDelegate.alloc.init;
button.action = 'btnClickHandler';

window.contentView.addSubview(button);