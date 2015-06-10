var constraints = { audio: true, video: { width: 1280, height: 720 };

navigator.getUserMedia( constraints,
    function(stream) {
        var video = document.querySelector('video');
        video.src = window.URL.createObjectURL(stream);
        video.onloadedmetadata = function(e) {
            video.play();
        };
    },
    function(err) {
        console.log("Error: " + err.name);
    }
);
