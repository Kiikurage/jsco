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