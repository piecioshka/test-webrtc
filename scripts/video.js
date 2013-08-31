(function () {
    'use strict';

    var camera = document.querySelector('video');

    var constraints = {
        video: true
    };

    function gotVideoStream(stream) {
        console.log('[*] gotVideoStream', stream);
        camera.src = URL.createObjectURL(stream);
        camera.play();
    }

    onLoad(getMedia.bind(null, constraints, gotVideoStream, logError));

}());