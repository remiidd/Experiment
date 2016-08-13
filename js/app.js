// PROJECT EXPERIMENT
var pos = 9;
var liens = 'url("assets/env/' + pos + '.jpg")';

var main = function() {
	$('.bordureGauche').hide();
	$('.bordureDroite').hide();
	$('.bordureBGauche').hide();
	$('.bordureBDroite').hide();
	$(document).keydown(function(event) {
		// FLECHE DROITE = 39
		// FLECHE GAUCHE = 37
		
		if(event.which === 39) { //FLECHE DROITE
			$('.pop-up').hide(1000);
			if(pos === 18) {
				document.body.style.backgroundImage = liens;
				$('.bordureDroite').show();
				$('.bordureBDroite').show();
				$('.bordureDroite').hide(1000);
				$('.bordureBDroite').hide(1000);
			} else {
				pos = pos + 1;
				liens = 'url("assets/env/' + pos + '.jpg")';
				document.body.style.backgroundImage = liens;
			}
		} else if(event.which === 37) { //FLECHE GAUCHE
			$('.pop-up').hide(1000);
			if(pos === 0) {
				document.body.style.backgroundImage = liens;
				$('.bordureGauche').show();
				$('.bordureBGauche').show();
				$('.bordureGauche').hide(1000);
				$('.bordureBGauche').hide(1000);
			} else {
				pos = pos - 1;
				liens = 'url("assets/env/' + pos + '.jpg")';
				document.body.style.backgroundImage = liens;
			}
		} else {
			$('.pop-up').show();
			$('.pop-up').animate({
				opacity: '0.75'
			},200);
				$('.bordureGauche').show();
				$('.bordureBGauche').show();
				$('.bordureDroite').show();
				$('.bordureBDroite').show();
				$('.bordureGauche').hide(1000);
				$('.bordureBGauche').hide(1000);
				$('.bordureDroite').hide(1000);
				$('.bordureBDroite').hide(1000);
		}
	});
}

$(document).ready(main);