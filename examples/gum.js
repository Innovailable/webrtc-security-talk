var constraints = { audio: true, video: true };

navigator.getUserMedia(constraints,
    function(stream) {
        var video = $("<video autoplay>");
        video[0].src = window.URL.createObjectURL(stream);
        $("body").append(video);
    },
    function(err) {
        alert("Error: " + err.name);
    }
);
