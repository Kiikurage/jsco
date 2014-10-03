
ObjC.import('Cocoa');
(function() {
    var DEFAULT_STYLE_MASK = $.NSTitledWindowMask | $.NSClosableWindowMask | $.NSMiniaturizableWindowMask;

    ObjC.registerSubclass({
        name: 'JSWindow',
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
        name: 'JSButton',
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
                        width = param.width || 100,
                        height = param.height || 20,
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
ObjC.import('Cocoa');
(function() {
    ObjC.registerSubclass({
        name: 'JSTextView',
        superclass: 'NSTextView',
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
                        width = param.width || 100,
                        height = param.height || 20,
                        string = param.string || '',
                        bezelStyle = param.bezelStyle || $.NSRoundedBezelStyle,
                        buttonType = param.buttonType || $.NSMomentaryLightButton;

                    var _this = ObjC.super(this).initWithFrame(
                        $.NSMakeRect(left, top, width, height)
                    );

                    _this.string = string;
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
 *  @include ../src/JSWindow.js
 *  @include ../src/JSButton.js
 *  @include ../src/JSTextView.js
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

var window = $.JSWindow.alloc.init({
    left: 200,
    top: 100,
    width: 200,
    height: 120,
    title: 'JSCO Sample'
});

var textview = $.JSTextView.alloc.init({
    left: 50,
    top: 80,
    string: 'Hello World!'
});
textview.alignCenter(this);
textview.setBackgroundColor($.NSColor.colorWithRedGreenBlueAlpha(0, 0, 0, 0));
window.contentView.addSubview(textview);

var button = $.JSButton.alloc.init({
    left: 50,
    top: 50,
    title: 'Push to exit application.'
});
button.target = $.AppDelegate.alloc.init;
button.action = 'btnClickHandler';
window.contentView.addSubview(button);