var channel = new palava.WebSocketChannel('wss://machine.palava.tv')
var session = new palava.Session({ roomId: 'test', channel: channel })

session.on('local_stream_ready', function(stream) {
  palava.browser.attachMediaStream($('#myvideo'), stream);
  session.room.join();
});

session.on('peer_stream_ready', function(peer) {
  if(peer.isLocal()) return;

  var el = $('<li id="' + peer.id + '"><video autoplay></video></li>');
  palava.browser.attachMediaStream(el.children('video')[0], peer.getStream());
});

session.on('peer_left', function(peer) {
  $('#' + peer.id).remove();
});

session.init({
  identity: new palava.Identity({userMediaConfig: audio: true video: true }),
  options: { stun: 'stun:stun.palava.tv', joinTimeout: 500 },
});
