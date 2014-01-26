(function () {
    'use strict';

    var constraints = {
        "audio": true
    };

    function gotAudioStream(stream) {
        var audioContext = new webkitAudioContext();
        var mediaStreamSource = audioContext.createMediaStreamSource(stream);
        mediaStreamSource.connect(audioContext.destination);
    }

    // setup audio
    getMedia(constraints, gotAudioStream, logError);

}());
