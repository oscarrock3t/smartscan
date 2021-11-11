Quagga.init({
	inputStream: {
		name : "Live",
		type : "LiveStream",
		target : document.getElementById('cam')
	},
	frequency : 3,
	decoder : {
		readers : ["ean_reader"]
	},
	constraints : {
		width : 1024,
		height : 768
	}

}, function(err) {
	if (err) {
		console.error(err);
		return;
	}

	console.log("Init finished. Ready to start!");
	Quagga.start();
});

var resultCollector = Quagga.ResultCollector.create({
	capture : true,
	capacity : 200,
	filter: function(codeResult) {
		return true;
	}
});

Quagga.registerResultCollector(resultCollector);