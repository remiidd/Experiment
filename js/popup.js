// PROJECT EXPERIMENT

var main = function() {
	setTimeout(popup, 6000);
};
var popup = function() {
	$('.pop-up').animate({
		opacity: '0'
	},1000);
};

$(document).ready(main);