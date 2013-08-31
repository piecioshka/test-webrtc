(function (global) {
    'use strict';

    var nav = navigator;
    var doc = document;
    var URL = global.URL;

    var camera = doc.querySelector('video');

    var constraints = {
        "video": true
    };

    var getMedia = function () {
        console.log('[*] getMedia');
        var fn = null;
        ['', 'webkit', 'moz'].forEach(function (prefix) {
            var fnName = prefix + (prefix ? 'G' : 'g') + 'etUserMedia';
            if (nav[fnName]) {
                fn = nav[fnName];
            }
        });
        return fn.apply(nav, arguments);
    };

    function logError(error) {
        console.error(error.name + ": " + error.message);
    }

    function gotStream(stream) {
        console.log('[*] gotStream', stream);
        camera.src = URL.createObjectURL(stream);
    }

    global.addEventListener('load', getMedia.bind(null, constraints, gotStream, logError));

}(this));