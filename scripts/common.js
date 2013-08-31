(function (global) {
    'use strict';

    global.getMedia = function () {
        console.log('[*] getMedia');
        var nav = navigator;
        var fn = null;
        ['', 'webkit', 'moz'].forEach(function (prefix) {
            var fnName = prefix + (prefix ? 'G' : 'g') + 'etUserMedia';
            if (nav[fnName]) {
                fn = nav[fnName];
            }
        });
        return fn.apply(nav, arguments);
    };

    global.logError = function (err) {
        var msg = err.message;
        console.error(err.name + (msg ? msg : ''));
    };

    global.onLoad = function (callback) {
        global.addEventListener('load', callback, false);
    };

}(this));
