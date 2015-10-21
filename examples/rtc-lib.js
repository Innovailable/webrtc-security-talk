// create a room
var room = new rtc.Room("wss://signaling.innovailable.eu/testroom");

// create a local stream from the users camera
var stream = room.local.addStream();

// display that stream
var ve = new rtc.MediaDomElement($('video'), stream);

// get notified whenever we meet a new peer
room.on('peer_joined', function(peer) {
    // create a video tag for the peer
    var view = $('<video>');
    $('body').append(view);
    var ve = new rtc.MediaDomElement(view, peer);

    // remove the tag after peer left
    peer.on('left', function() {
        view.remove();
    });
});

// join the room
room.connect();
