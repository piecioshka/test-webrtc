(function () {
    'use strict';

    var camera = document.querySelector('video');

    var constraints = {
        video: true
    };

    function gotVideoStream(stream) {
        camera.src = URL.createObjectURL(stream);
        camera.play();
    }

    // setup video
    getMedia(constraints, gotVideoStream, logError);

}());
