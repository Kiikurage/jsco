/*
 *  @include ./KWindow.js
 *  @include ./KButton.js
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

ObjC.registerSubclass({
    name: "MyNotification",
    methods: {
        "userNotificationCenter:shouldPresentNotification:": {
            types: ["bool", ["id", "id"]],
            implementation: function(center, notification) {
                return true;
            }
        }
    }
});

var myNotification = $.MyNotification.alloc.init;

$.NSUserNotificationCenter.defaultUserNotificationCenter.delegate = myNotification;

function showNotification(title, msg) {
    var notification = $.NSUserNotification.alloc.init;
    notification.title = title;
    notification.informativeText = msg;
    notification.soundName = $.NSUserNotificationDefaultSoundName;
    $.NSUserNotificationCenter.defaultUserNotificationCenter.deliverNotification(notification);
}

var window = $.KWindow.alloc.init({
    left: 200,
    top: 100,
    width: 200,
    height: 120,
    title: 'KLibrary Sample'
});

var button = $.KButton.alloc.init({
    left: 50,
    top: 50,
    width: 100,
    height: 20,
    title: 'Push Me!'
});
button.target = $.AppDelegate.alloc.init;
button.action = 'btnClickHandler';

window.contentView.addSubview(button);