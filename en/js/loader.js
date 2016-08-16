// Project experiment

var main = function() {
     $('.loading').show();
	 var i = 0;
     imageObj = new Image();

     // liste d'images
    images = new Array();
    images[0]="assets/env/0.jpg"
    images[1]="assets/env/1.jpg"
	images[2]="assets/env/2.jpg"
	images[3]="assets/env/3.jpg"
	images[4]="assets/env/4.jpg"
	images[5]="assets/env/5.jpg"
	images[6]="assets/env/6.jpg"
	images[7]="assets/env/7.jpg"
	images[8]="assets/env/8.jpg"
	images[9]="assets/env/9.jpg"
	images[10]="assets/env/10.jpg"
	images[11]="assets/env/11.jpg"
	images[12]="assets/env/12.jpg"
	images[13]="assets/env/13.jpg"
	images[14]="assets/env/14.jpg"
	images[15]="assets/env/15.jpg"
	images[16]="assets/env/16.jpg"
	images[17]="assets/env/17.jpg"
	images[18]="assets/env/18.jpg"
	 
	 

     // Préchargement
     for(i=0; i<=18; i++) 
     {
          imageObj.src=images[i];
     }
	 setTimeout(fermeture, 1000);
};
var fermeture = function() {
	$('.loading').hide();
};

$(document).ready(main);