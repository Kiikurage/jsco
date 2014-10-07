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