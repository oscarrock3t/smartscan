navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
if(navigator.getUserMedia!=null) {
	var options = {
		video: true
	}

	navigator.getUserMedia(options, 
		function(stream) {
			var videoBox = document.getElementById('cam');
			videoBox.src = stream;
			videoBox.play();
		},
		function (e) {
			console.error("Error! Error code: " + e.code + ". Message: " + e.message);
		});
}
