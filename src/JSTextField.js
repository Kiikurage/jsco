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