let name = document.getElementById('name');
let price = document.getElementById('price');
let inputBarcode = document.getElementById('input-barcode');
let form = document.getElementById('form-barcode');

Quagga.onDetected(function(data) {
	var barcode = resultCollector.getResults()[resultCollector.getResults().length-1].codeResult.code
	pasteInInput(barcode);
	requestGoods(barcode);
});

function requestGoods(barcode) {
	console.log('requ');
}

function pasteInInput(barcode) {
	inputBarcode.value = barcode;
}

form.onsubmit = (e)=> {
	e.preventDefault();
	requestGoods(inputBarcode.value);
}