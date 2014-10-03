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