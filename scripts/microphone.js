(function () {
    'use strict';

    function trim(source) {
        return source.replace(/^\s+|\s+$/g, "");
    }

    function insert(text) {
        var area = document.getElementsByTagName("textarea")[0];
        area.innerHTML += " - " + trim(text) + "\n";
    }

    function runTranslating() {
        var recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "pl";
        recognition.start();
        recognition.onresult = function (event) {
            for (var i = event.resultIndex; i < event.results.length; i += 1) {
                var msg = event.results[i];
                if (msg.isFinal) {
                    insert(msg[0].transcript);
                }
            }
        };
    }

    // setup recognize voice
    runTranslating();

}());
