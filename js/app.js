// PROJECT EXPERIMENT
var pos = 9;
var liens = 'url("assets/env/' + pos + '.jpg")';
var hey = 'hey';

var main = function() {
	$(document).keydown(function(event) {
		// FLECHE DROITE = 39
		// FLECHE GAUCHE = 37
		
		if(event.which === 39) { //FLECHE DROITE
			if(pos === 18) {
				document.body.style.backgroundImage = liens;
			} else {
				pos = pos + 1;
				liens = 'url("assets/env/' + pos + '.jpg")';
				document.body.style.backgroundImage = liens;
			}
		} else if(event.which === 37) { //FLECHE GAUCHE
			if(pos === 0) {
				document.body.style.backgroundImage = liens;
			} else {
				pos = pos - 1;
				liens = 'url("assets/env/' + pos + '.jpg")';
				document.body.style.backgroundImage = liens;
			}
		}
	});
}

$(document).ready(main);