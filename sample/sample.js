/*
 *  @include ../src/jsco.js
 */

ObjC.registerSubclass({
    name: 'AppDelegate',
    superclass: 'JSAppDelegate',
    methods: {
        'applicationDidFinishLaunching': {
            types: ['void', []],
            implementation: function () {
                var window = new JSWindow({
                    width: 500,
                    height: 250,
                    x: 200,
                    y: 250,
                    title: 'Notepad Sample',
                    resizable: false
                });

                var saveBtn = new JSButton({
                    width: 60,
                    height: 30,
                    x: 360,
                    y: 215,
                    title: 'Save'
                });
                saveBtn.cocoa_.target = this;
                saveBtn.cocoa_.action = 'saveBtnDidClicked';
                saveBtn.appendTo(window);

                var label = new JSTextLabel({
                    width: 300,
                    height: 30,
                    x: 30,
                    y: 210,
                    value: 'Input something, and Push \'Save\' button.'
                });
                label.appendTo(window);

                var labelState = new JSTextLabel({
                    width: 60,
                    height: 30,
                    x: 420,
                    y: 210,
                    value: 'Saved.',
                    align: JSTextLabel.Align.Right,
                    color: $.NSColor.blueColor
                });
                labelState.appendTo(window);

                var field = new JSTextField({
                    width: 500,
                    height: 210,
                    x: 0,
                    y: 0
                });
                field.appendTo(window);

                var userDefault = $.NSUserDefaults.standardUserDefaults;
                field.cocoa_.setStringValue(userDefault.stringForKey('value'));
            }
        },
        'saveBtnDidClicked': {
            types: ['void', ['id']],
            implementation: function (sender) {
                var userDefault = $.NSUserDefaults.standardUserDefaults;

                userDefault.setObjectForKey(field.cocoa_.stringValue, 'value');
                userDefault.synchronize;
            }
        }
    }
});