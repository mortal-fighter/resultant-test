'use strict';

var stocksRefreshInterval = null;

function loadCurrencies() {
	$('#currency-container').load('/ajax_get_stocks', function() {
		$('#currency-container').addClass('highlighted');
		setTimeout(function() {
			$('#currency-container').removeClass('highlighted');
		}, 1000);
	});
}

$(document).ready(function() {
	loadCurrencies();
	
	stocksRefreshInterval = setInterval(function() {
		loadCurrencies();
	}, 15000);

	$('#refresh-stocks').on('click', loadCurrencies);
});