function inherit(subClass, superClass) {
    var __ = function() {};
    __.prototype = new superClass();
    subClass.prototype = new __();
    extend(subClass, superClass);
}

function LOG(obj) {
    $.NSLog('%@', obj);
}

function extend(target) {
    var sources = Array.prototype.slice.call(arguments, 1);
    for (var i = 0, max = sources.length; i < max; i++) {
        var source = sources[i];
        for (var key in source) {
            target[key] = source[key];
        }
    }
    return source;
}