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