/*
 *  @include ../src/JSWindow.js
 *  @include ../src/JSButton.js
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

var button = $.JSButton.alloc.init({
    left: 50,
    top: 50,
    width: 100,
    height: 20,
    title: 'Push to exit application.'
});
button.target = $.AppDelegate.alloc.init;
button.action = 'btnClickHandler';

window.contentView.addSubview(button);