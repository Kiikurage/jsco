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