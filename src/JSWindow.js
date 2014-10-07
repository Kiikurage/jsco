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