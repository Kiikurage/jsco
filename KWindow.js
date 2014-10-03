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