// PROJECT EXPERIMENT
var main = function() {
	setTimeout(popup, 5000);
};
var popup = function() {
	$('.pop-up').animate({
		opacity: '0'
	},250);
};

$(document).ready(main);