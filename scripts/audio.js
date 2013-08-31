(function () {
    'use strict';

    var constraints = {
        "audio": true
    };

    function gotAudioStream(stream) {
        console.log('[*] gotAudioStream', stream);

        var audioContext = new webkitAudioContext();
        var mediaStreamSource = audioContext.createMediaStreamSource(stream);
        mediaStreamSource.connect(audioContext.destination);
    }

    onLoad(getMedia.bind(null, constraints, gotAudioStream, logError));

}());