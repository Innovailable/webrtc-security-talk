var channel = new palava.WebSocketChannel('wss://machine.palava.tv')
var session = new palava.Session({ roomId: 'test', channel: channel })

session.on('local_stream_ready', function(stream) {
  palava.browser.attachMediaStream($('#myvideo')[0], stream);
  session.room.join();
});

session.on('peer_stream_ready', function(peer) {
  if(peer.isLocal()) return;

  var view = $('<li><video autoplay></video></li>');
  $('ul').append(view);

  palava.browser.attachMediaStream(view.children('video')[0], peer.getStream());

  peer.on('left', function() {
      view.remove();
  });
});

session.init({
  identity: new palava.Identity({userMediaConfig: audio: true video: true }),
  options: { stun: 'stun:stun.palava.tv', joinTimeout: 500 },
});
