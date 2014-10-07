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