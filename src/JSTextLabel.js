/**
 *	@include ./JSTextField.js
 */

ObjC.import('Cocoa');

function JSTextLabel(param) {
    param = param || {};

    JSTextField.call(this, param);

    this.cocoa_.setBezeled(false);
    this.cocoa_.setDrawsBackground(false);
    this.cocoa_.setEditable(false);
    this.cocoa_.setSelectable(false);
}
inherit(JSTextLabel, JSTextField);