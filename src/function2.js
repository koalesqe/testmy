var hotel = "Vue aérienne";
var hotelname = "";
var quelButton = "right";
var etat = true;
var nomdelavue = "";

 

function vignettehotspot() {
    $(".bottom").show;

}

/* ___________________________________ Masquer les éléments au départ _________________________________________ */

$('#bottom').hide();
$('#left').hide();

$('.logohotel').hide();
$('.logotitre').hide();
$('#hoteldeparis').hide();
$('#hoteldeparissuites').hide();
$('#hotelhermitage').hide();
$('#hotelhermitagesuites').hide();
$('#hotelmcbay').hide();
$('#hotelmcbaysuites').hide();
$('#hotelbeach').hide();
$('#hotelbeachsuites').hide();
$('#hotelthermes').hide();
$('#hotelthermessuites').hide();
$('#hotelaeriennes').hide();
$('#hotelaeriennessuites').hide();
$('#hotelcasinos').hide();
$('#hotelcasinossuites').hide();
$('#hotelbuddhabar').hide();
$('#hotelbuddhabarsuites').hide();
$('#hotelrascasse').hide();
$('#hotelrascassesuites').hide();
$('#hotelcdp').hide();
$('#hotelcdpsuites').hide();
$('#hotelsporting').hide();
$('#hotelsportingsuites').hide();
$('#hotelvigie').hide();
$('#hotelvigiesuites').hide();
$('#hotelvenues').hide();
$('#hotelvenuessuites').hide();
$('#hotelone').hide();
$('#hotelonesuites').hide();



$('.lesetablissements').hide();
$('#lightbox').hide();
$('.close-bottom').hide();
$('#enveloppe').hide();
$('#infos-complementaires').hide();
$('#jssor_1').hide();
$('.swiper-container').hide();
$('.menu_general_galeries_photos').hide();
$('#menu-galerie-hh').hide();
$('#menu-galerie-hdp').hide();
$('#menu-galerie-mcb').hide();
$('#menu-galerie-beach').hide();
$('#menu-galerie-one').hide();
$('#containervideo').hide();
$('#infos').hide();
$('#galerie-but').hide();


$('#arrow-right2').hide();
$('#arrow-right3').hide();
$('#arrow-left2').hide();
$('#arrow-left3').hide();


$('#hh-facade-galerie').hide();
$('#hh-room-galerie').hide();
$('#hh-resto-galerie').hide();
$('#hh-meeting-galerie').hide();
$('#hh-leisure-galerie').hide();

$('#hdp-facade-galerie').hide();
$('#hdp-room-galerie').hide();
$('#hdp-resto-galerie').hide();
$('#hdp-meeting-galerie').hide();
$('#hdp-leisure-galerie').hide();

$('#mcb-facade-galerie').hide();
$('#mcb-room-galerie').hide();
$('#mcb-resto-galerie').hide();
$('#mcb-meeting-galerie').hide();
$('#mcb-leisure-galerie').hide();

$('#beach-facade-galerie').hide();
$('#beach-room-galerie').hide();
$('#beach-resto-galerie').hide();
$('#beach-meeting-galerie').hide();
$('#beach-leisure-galerie').hide();

$('#one-conference-galerie').hide();
$('#one-district-galerie').hide();
$('#one-leisure-galerie').hide();
$('#one-restaurant-galerie').hide();

$('#thermes-galerie').hide();
$('#fermer-menu-photo-thermes').hide();
$('#retour-menu-photo-thermes').hide();

$('#sporting-galerie').hide();
$('#fermer-menu-photo-sporting').hide();
$('#retour-menu-photo-sporting').hide();

$('#cdp-galerie').hide();
$('#fermer-menu-photo-cdp').hide();
$('#retour-menu-photo-cdp').hide();

$('#casinos-galerie').hide();
$('#fermer-menu-photo-casinos').hide();
$('#retour-menu-photo-casinos').hide();

$('#buddhabar-galerie').hide();
$('#fermer-menu-photo-buddhabar').hide();
$('#retour-menu-photo-buddhabar').hide();

$('#rascasse-galerie').hide();
$('#fermer-menu-photo-rascasse').hide();
$('#retour-menu-photo-rascasse').hide();

$('#vigie-galerie').hide();
$('#fermer-menu-photo-vigie').hide();
$('#retour-menu-photo-vigie').hide();



$('#extra-galerie').hide();
$('#fermer-menu-photo-extra').hide();
$('#retour-menu-photo-extra').hide();


$('#carte-cercle-generique').hide();
$('#fermer-carte-cercle').hide();

$('#plans').hide();
$('#fermer-plans').hide();
$('#resa').hide();


$('#fermerphoto').hide();



/* __function testconnectionlolo() {
    var imgTestInternet = new Image();
    imgTestInternet.onload = function () {
        //$('#resa').show();
    }
    imgTestInternet.onerror = function () {
       // $('#resa').hide();
    }
    imgTestInternet.src = "http://www.google.fr/images/srpr/nav_logo13.png"; 

}__ */





/* ______________________ ANIMATION TOP _________________________________________ */
function haut() {
   
    
    if (etat === true) {
        //on vérifie sur quel bouton on a appuyé
        quelButton = "top";
        document.querySelector("#top").style.backgroundImage = "url('img/close-but.png')";
        //Lancement de l'animation aller
        conteneur.style.webkitTransform = "rotateX(45deg)";
        conteneur.style.webkitTransform = 'translateZ(-500px) translateY(200px) rotateX(30deg)';
        conteneur.style.webkitTransition = 'all 0.3s linear';
        conteneur.style.MozTransform = 'rotateX(45deg)';
        conteneur.style.MozTransform = 'translateZ(-500px) translateY(200px) rotateX(30deg)';
        conteneur.style.MozTransform = 'all 0.3s linear';
        conteneur.style.transform = 'rotateX(45deg)';
        conteneur.style.transform = 'translateZ(-500px) translateY(200px) rotateX(30deg)';
        conteneur.style.transition = 'all 0.3s linear';
        //Inversion du bouton Top pour remonter
        etat = false;
        //On vérifie sur quel bouton on a appuyé
        if (quelButton == "top") {
            //Masquage des autres boutons
            $('.left').hide();
            $('.right').hide();
            $('.bottom').hide();
            $('.titre').hide();
            $('.boutons').hide();
            $('#infos-complementaires').hide();
            $('#enveloppe').show();
            $('.logotitre').hide();
        }
    } else {
        retour();
    }
}

var myVar;

function timer() {
    myVar = setTimeout(alertFunc, 300);
}

function alertFunc() {
    //Réaffichage des autres boutons
    //$('.left').show();
    $('.right').show();
    //$('.bottom').show();
    $('.titre').show();
    $('.boutons').show();
    $('#infos-complementaires').hide();
    $('#enveloppe').hide();
}


/* ______________________ ANIMATION BOTTOM _________________________________________ */

/*function bas() {
    
    if (etat == true) {
        //on vérifie sur quel bouton on a appuyé
        quelButton = "bottom";
        document.querySelector("#bottom").style.backgroundImage = "url('img/close-but.png') ";
        document.querySelector("#bottom").style.backgroundSize = "27px, 27px";
        //Lancement de l'animation aller
        conteneur.style.webkitTransform = 'rotateX(45deg)';
        conteneur.style.webkitTransform = 'translateZ(-500px) translateY(-300px) rotateX(-30deg)';
        conteneur.style.webkitTransform = 'all 0.3s linear';
        conteneur.style.MozTransform = 'rotateX(45deg)';
        conteneur.style.MozTransform = 'translateZ(-500px) translateY(-300px) rotateX(-30deg)';
        conteneur.style.MozTransform = 'all 0.3s linear';
        conteneur.style.transform = 'rotateX(45deg)';
        conteneur.style.transform = 'translateZ(-500px) translateY(-300px)  rotateX(-30deg)';
        conteneur.style.transition = 'all 0.3s linear';
        //Inversion du bouton Top pour remonter
        etat = false;

        //On vérifie sur quel bouton on a appuyé
        if (quelButton == "bottom") {
            //Masquage des autres boutons
            $('.left').hide();
            $('.right').hide();
            $('.top').hide();
            $('.titre').hide();
            $('.bx-wrapper').hide();
            $('.boutons').hide();
            $('#logo-sbm').hide();
            $('#cadre-vignettes').show();
        }
    } else {
        retour();
    }
}*/

var myVar2;

function timer2() {
    myVar2 = setTimeout(alertFunc2, 180);
}

function alertFunc2() {
    //Réaffichage des autres boutons
    //$('.left').show();
    $('.right').show();
    $('.top').show();
    $('.titre').show();
    $('#logo-sbm').show();
    $('.boutons').show();
    $('.cadre-vignettes').hide();
    $('#infos-complementaires').hide();
}


/* ______________________ Animation LEFT _________________________________________ */

function gauche() {
    if (etat == true) {
        //on vérifie sur quel bouton on a appuyé
        quelButton = "left";
        //Lancement de l'animation aller 
        conteneur.style.webkitTransform = 'rotateX(45deg)';
        conteneur.style.webkitTransform = 'translateZ(-300px) translateX(-20%) rotateY(-20deg) ';
        conteneur.style.webkitTransform = 'all 0.3s linear';
        conteneur.style.MozTransform = 'rotateX(45deg)';
        conteneur.style.MozTransform = 'translateZ(-300px) translateX(-20%) rotateY(-20deg) ';
        conteneur.style.MozTransform = 'all 0.3s linear';
        conteneur.style.transform = 'rotateX(45deg)';
        conteneur.style.transform = 'translateZ(-300px) translateX(-20%) rotateY(-20deg) ';
        conteneur.style.transition = 'all 0.3s linear';
        //Inversion du bouton Top pour remonter
        etat = false;
        //On vérifie sur quel bouton on à appuyé
        if (quelButton == "left") {
            //Masquage des autres boutons
            $('.bottom').hide();
            $('.right').hide();
            $('.top').hide();
            $('.titre').hide();
            $('#logo-sbm').hide();
            $('.boutons').hide();
        }
    } else {
        retour();
    }
}

var myVar3;

function timer3() {
    myVar3 = setTimeout(alertFunc3, 300);
}

function alertFunc3() {
    //Réaffichage des autres boutons
    //$('.bottom').show();
    $('.right').show();
    $('.top').show();
    $('.titre').show();
    $('#logo-sbm').show();
    $('.boutons').show();
    $('#infos-complementaires').hide();
}


/* ______________________ Animation RIGHT _________________________________________ */

function droite() {
    if (etat == true) {
        //on vérifie sur quel bouton on a appuyé
        quelButton = "right";
        document.querySelector("#right").style.backgroundImage = "url('img/close-but.png')";
        //Lancement de l'animation aller 
        conteneur.style.webkitTransform = 'rotateX(45deg)';
        conteneur.style.webkitTransform = 'translateZ(-300px) rotateY(20deg)';
        conteneur.style.webkitTransform = 'all 0.3s linear';
        conteneur.style.MozTransform = 'rotateX(45deg)';
        conteneur.style.MozTransform = 'translateZ(-300px) rotateY(20deg)';
        conteneur.style.MozTransform = 'all 0.3s linear';
        conteneur.style.transform = 'rotateX(45deg)';
        conteneur.style.transform = 'translateZ(-300px) rotateY(20deg)';
        conteneur.style.transition = 'all 0.3s linear';
        //Inversion du bouton Top pour remonter
        etat = false;
        //On vérifie sur quel bouton on à appuyé
        if (quelButton == "right") {
            //Masquage des autres boutons
            $('.bottom').hide();
            $('.left').hide();
            $('.top').hide();
            $('.titre').hide();
            $('#logo-sbm').hide();
            $('.boutons').hide();
            $('.logotitre').hide();
            $('#infos-complementaires').show();
        }
    } else {
        retour();
    }
}

var myVar4;

function timer4() {
    myVar4 = setTimeout(alertFunc4, 150);
}

function alertFunc4() {
    //Réaffichage des autres boutons
    //$('.bottom').show();
    //$('.left').show();
    $('.top').show();
    $('.titre').show();
    $('#logo-sbm').show();
    $('.boutons').show();
    $('#infos-complementaires').hide();
    $('.logotitre').show();
}


/* ______________________ DEFINITION DE LA FUNCTION RETOUR  _________________________________________ */

function retour() {
    if (hotel == "hoteldeparis") {
        $('.bottom').show();
    }
    if (hotel == "hotelhermitage") {
        $('.bottom').show();
    }
    if (hotel == "hotelmcbay") {
        $('.bottom').show();
    }
    if (hotel == "hotelbeach") {
        $('.bottom').show();
    }
    if (hotel == "hotelthermes") {
        $('.bottom').show();
    }
    if (hotel == "hotelaeriennes") {
        $('.bottom').show();
    }
    if (hotel == "hotelcasinos") {
        $('.bottom').show();
    }
    if (hotel == "hotelbuddhabar") {
        $('.bottom').show();
    }
    if (hotel == "hotelrascasse") {
        $('.bottom').show();
    }
    if (hotel == "hotelcdp") {
        $('.bottom').show();
    }
    if (hotel == "hotelsporting") {
        $('.bottom').show();
    }
    if (hotel == "hotelvigie") {
        $('.bottom').show();
    }
	if (hotel == "hotelvenues") {
        $('.bottom').show();
    }
	if (hotel == "hotelone") {
        $('.bottom').show();
    }

    //$('.bottom').show();

    var name2 = krpano2().get('scene[get(xml.scene)].name');
    var cool = "#" + name2;
    if (quelButton == "top") {
        //Lancement de l'animation retour
        timer()
        conteneur.style.webkitTransform = 'rotateX(0deg)';
        conteneur.style.webkitTransform = 'translateZ(0px) rotateX(0deg)';
        conteneur.style.webkitTransition = 'all 0.3s linear';
        conteneur.style.MozTransform = 'rotateX(0deg)';
        conteneur.style.MozTransform = 'translateZ(0px) rotateX(0deg)';
        conteneur.style.MozTransform = 'all 0.33s linear';
        conteneur.style.transform = 'rotateX(0deg)';
        conteneur.style.transform = 'translateZ(0px) rotateX(0deg)';
        conteneur.style.transition = 'all 0.3s linear';
        //On réinitialise la variable état
        etat = true;
        document.querySelector("#top").style.backgroundImage = "url('img/but_menu.png')";
    }
    if (quelButton == "bottom") {
        //Lancement de l'animation retour
        timer2();
        conteneur.style.webkitTransform = 'rotateX(0deg)';
        conteneur.style.webkitTransform = 'translateZ(0px) rotateX(0deg)';
        conteneur.style.webkitTransition = 'all 0.3s linear';
        conteneur.style.MozTransform = 'rotateX(0deg)';
        conteneur.style.MozTransform = 'translateZ(0px) rotateX(0deg)';
        conteneur.style.MozTransform = 'all 0.3s linear';
        conteneur.style.transform = 'rotateX(0deg)';
        conteneur.style.transform = 'translateZ(0px) rotateX(0deg)';
        conteneur.style.transition = 'all 0.3s linear';
        //On réinitialise la variable état
        etat = true;
        document.querySelector("#bottom").style.backgroundImage = "url('img/vignettes-but.png')";
        document.querySelector("#bottom").style.backgroundSize = "64px, 27px";
    }
    if (quelButton == "left") {
        //Lancement de l'animation retour
        timer3();
        conteneur.style.webkitTransform = 'rotateX(0deg)';
        conteneur.style.webkitTransform = 'translateZ(0px) translateX(0%) rotateY(0deg) ';
        conteneur.style.webkitTransform = 'all 0.3s linear';
        conteneur.style.MozTransform = 'rotateX(0deg)';
        conteneur.style.MozTransform = 'translateZ(0px) translateX(0%) rotateY(0deg) ';
        conteneur.style.MozTransform = 'all 0.3s linear';
        conteneur.style.transform = 'rotateX(0deg)';
        conteneur.style.transform = 'translateZ(0px) translateX(0%) rotateY(0deg) ';
        conteneur.style.transition = 'all 0.3s linear';
        //On réinitialise la variable état
        etat = true;
    }
    if (quelButton == "right") {
        //Lancement de l'animation retour
        timer4();
        conteneur.style.webkitTransform = 'rotateX(0deg)';
        conteneur.style.webkitTransform = 'translateZ(0px) translateX(0%) rotateY(0deg) ';
        conteneur.style.webkitTransform = 'all 0.3s linear';
        conteneur.style.MozTransform = 'rotateX(0deg)';
        conteneur.style.MozTransform = 'translateZ(0px) translateX(0%) rotateY(0deg) ';
        conteneur.style.MozTransform = 'all 0.3s linear';
        conteneur.style.transform = 'rotateX(0deg)';
        conteneur.style.transform = 'translateZ(0px) translateX(0%) rotateY(0deg) ';
        conteneur.style.transition = 'all 0.3s linear';
        //On réinitialise la variable état
        etat = true;
        document.querySelector("#right").style.backgroundImage = "url('img/plus-but.png')";
    }
     $('.logotitre').show();
}



/* ___________________________________ ASPECT DES ETABLISSEMENTS _________________________________________ */



function hoteldeparis() {
    hotel = "hoteldeparis";
    timer7();
    logotitre();
}

function hotelhermitage() {
    hotel = "hotelhermitage";
    timer7();
    logotitre();
}

function hotelmcbay() {
    hotel = "hotelmcbay";
    timer7();
    logotitre();
}

function hotelbeach() {
    hotel = "hotelbeach";
    timer7();
    logotitre();
}

function hotelthermes() {
    hotel = "hotelthermes";
    timer7();
    logotitre();
}

function hotelaeriennes() {
    hotel = "hotelaeriennes";
    timer7();
    logotitre();
    $('.resa').hide();
}

function hotelcasinos() {
    hotel = "hotelcasinos";
    timer7();
    logotitre();
}

function hotelbuddhabar() {
    hotel = "hotelbuddhabar";
    timer7();
    logotitre();
}

function hotelrascasse() {
    hotel = "hotelrascasse";
    timer7();
    logotitre();
}

function hotelcdp() {
    hotel = "hotelcdp";
    timer7();
    logotitre();
}

function hotelsporting() {
    hotel = "hotelsporting";
    timer7();
    logotitre();
}

function hotelvigie() {
    hotel = "hotelvigie";
    timer7();
    logotitre();
}

function hotelvenues() {
    hotel = "hotelvenues";
    timer7();
    logotitre();
}

function hotelone() {
    hotel = "hotelone";
    timer7();
    logotitre();
}


var myVar7;

function timer7() {
    myVar7 = setTimeout(aspectetablissement, 100);
}

function aspectetablissement() {
    var recupetablissement = document.querySelectorAll(".images");
    var but = hotel + "but";
    /* PATCH 12/2021 (1) */
    $(recupetablissement).each(function(i) {
        $(recupetablissement[i]).css('opacity', (recupetablissement[i].id == but ? '0.5' : '1'));
    });
    /*
    for (i in recupetablissement) {

        if (recupetablissement[i].id == but) {
            recupetablissement[i].style.opacity = "0.5";
        } else {
            recupetablissement[i].style.opacity = "1";
        }
    }
    */
}


/* ___________________________________ ASPECT DE VIGNETTES _________________________________________ */

/* FUNCTION pour retarder l'execution de la function recupname pour laisser charger la vue active */
var myVar5;

function timer5() {

    myVar = setTimeout(recupnamevueencour, 30);
}


function krpano2() {
    return document.getElementById("krpanoSWFObject");
}

function recupnamevueencour() {
    var title = krpano2().get('scene[get(xml.scene)].title');
    var name2 = krpano2().get('scene[get(xml.scene)].nameid');
    var recuptitle = krpano2().get('scene[get(xml.scene)].etablissement');
    var cool = "#" + name2;
    var verifbutid = "#" + document.querySelector(cool).id;
    var verifbutclass = document.querySelector(".vignettes").id;
    document.querySelector(cool).style.backgroundColor = "#ebdfac";
    document.getElementById("titre").innerHTML = "<span>" + recuptitle + "</span>" + " - " + title;
    
    timeraspectvignette();
    timerpictophoto();
    timerpictovideo();
    timerpictoinfo();
    timerpictoresa();
    
    ga("send", "event", {
		eventCategory:"Hotels", 	// Catégorie d'évènement
		eventAction:"Click", 		// Type d'évenement
		eventLabel: "(" + recuptitle + ") : " + title, 			// Intitulé d'évènement
		transport:"beacon"
		});

}

function timeraspectvignette() {
    myVar = setTimeout(aspectvignette, 30);
}


function aspectvignette() {
    var name2 = krpano2().get('scene[get(xml.scene)].nameid');
    var recupid = document.querySelectorAll(".vignettes");
    var recuplegende = document.querySelectorAll(".legende");
    /* PATCH 12/2021 (2) */
    $(recupid).each(function(i) {
        $(recupid[i]).css('background-color', (recupid[i].id == name2 ? '#ceb54f' : ''));
        if(recuplegende[i]) $(recuplegende[i]).css('color', (recupid[i].id == name2 ? '#fff' : '#a9a9a9'));
    });
    /*
    for (i in recupid) {
        if (recupid[i].id == name2) {
            recupid[i].style.backgroundColor = "#ceb54f";
            recuplegende[i].style.color = "#fff";
        } else {
            recupid[i].style.backgroundColor = "";
            recuplegende[i].style.color = "#a9a9a9";
        }
    }
    */
}

var retourvignette = document.querySelectorAll(".vignettes");
for (i = 0; i < retourvignette.length; i++) {
    retourvignette[i].addEventListener("click", function () {
        retour();
    });
}


/* ______________________ lOGOS TITRE _________________________________________ */


function logotitre(){
    $('.logotitre').show();
    
    if (hotel == "hoteldeparis") {
        document.querySelector(".logotitre").src = "img/logo_HDP.jpg";
        document.querySelector(".logotitre").style.opacity = "100";
    }
    if (hotel == "hotelhermitage") {
        document.querySelector(".logotitre").src = "img/logo_HH.jpg";
        document.querySelector(".logotitre").style.opacity = "100";
    }
    if (hotel == "hotelmcbay") {
        document.querySelector(".logotitre").src = "img/logo-Monte-CarloBay.jpg";
        document.querySelector(".logotitre").style.opacity = "100";
    }
    if (hotel == "hotelbeach") {
        document.querySelector(".logotitre").src = "img/logo_MCBeach.jpg";
        document.querySelector(".logotitre").style.opacity = "100";
    }
    if (hotel == "hotelthermes") {
        document.querySelector(".logotitre").src = "img/logo_Thermes_Marins.jpg";
        document.querySelector(".logotitre").style.opacity = "100";
    }
    if (hotel == "hotelaeriennes") {
        document.querySelector(".logotitre").style.opacity = "0";
        $("#resa").hide();
        
    }

    if (hotel == "hotelcasinos") {
       document.querySelector(".logotitre").src = "img/visu_casinos.jpg";
        document.querySelector(".logotitre").style.opacity = "100";
    }

    if (hotel == "hotelbuddhabar") {
       document.querySelector(".logotitre").src = "img/visu_buddhabar.jpg";
        document.querySelector(".logotitre").style.opacity = "100";
    }

    if (hotel == "hotelrascasse") {
        document.querySelector(".logotitre").src = "img/visu_rascasse.jpg";
        document.querySelector(".logotitre").style.opacity = "100";
    }
    if (hotel == "hotelcdp") {
        document.querySelector(".logotitre").src = "img/visu_cdp.jpg";
        document.querySelector(".logotitre").style.opacity = "100";
    }
    if (hotel == "hotelsporting") {
       document.querySelector(".logotitre").src = "img/visu_sporting.jpg";
        document.querySelector(".logotitre").style.opacity = "100";
    }
    if (hotel == "hotelvigie") {
        document.querySelector(".logotitre").src = "img/visu_vigie.jpg";
        document.querySelector(".logotitre").style.opacity = "100";
    }
	if (hotel == "hotelvenues") {
       
    }	
	if (hotel == "hotelone") {
       document.querySelector(".logotitre").src = "img/onemontecarlo.jpg";
       document.querySelector(".logotitre").style.opacity = "100";
    }
}





function cachelogotitre(){
    $('.logotitre').hide();
}







/* ______________________ FULLSCREEN _________________________________________ */

document.getElementById('fullscreen').addEventListener('click', function () {
    toggleFullscreen();
});

function toggleFullscreen(elem) {
    elem = elem || document.documentElement;
    if (!document.fullscreenElement && !document.mozFullScreenElement &&
        !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

/* ______________________ LIGHTBOX _________________________________________ */


function ligtbox() {
    $('.close-bottom').show();
    $('.bottom').hide();
    $('#lightbox').show();
    

    if (hotel == "hoteldeparis") {
        $("#" + hotel).show();
        $("#" + hotel + "suites").show();
        $("#" + hotel + "logo").show();
    }
    if (hotel == "hotelhermitage") {
        $("#" + hotel).show();
        $("#" + hotel + "suites").show();
        $("#" + hotel + "logo").show();
    }
    if (hotel == "hotelmcbay") {
        $("#" + hotel).show();
        $("#" + hotel + "suites").show();
        $("#" + hotel + "logo").show();
    }
    if (hotel == "hotelbeach") {
        $("#" + hotel).show();
        $("#" + hotel + "suites").show();
        $("#" + hotel + "logo").show();
    }
    if (hotel == "hotelthermes") {
        $("#" + hotel).show();
        $("#" + hotel + "suites").show();
        $("#" + hotel + "logo").show();
    }
    if (hotel == "hotelaeriennes") {
        $("#" + hotel).show();
        $("#" + hotel + "suites").show();
        $("#" + hotel + "logo").show();
    }

    if (hotel == "hotelcasinos") {
        $("#" + hotel).show();
        $("#" + hotel + "suites").show();
        $("#" + hotel + "logo").show();
    }

    if (hotel == "hotelbuddhabar") {
        $("#" + hotel).show();
        $("#" + hotel + "suites").show();
        $("#" + hotel + "logo").show();
    }

    if (hotel == "hotelrascasse") {
        $("#" + hotel).show();
        $("#" + hotel + "suites").show();
        $("#" + hotel + "logo").show();
    }
    if (hotel == "hotelcdp") {
        $("#" + hotel).show();
        $("#" + hotel + "suites").show();
        $("#" + hotel + "logo").show();
    }
    if (hotel == "hotelsporting") {
        $("#" + hotel).show();
        $("#" + hotel + "suites").show();
        $("#" + hotel + "logo").show();
    }
    if (hotel == "hotelvigie") {
        $("#" + hotel).show();
        $("#" + hotel + "suites").show();
        $("#" + hotel + "logo").show();
    }
	if (hotel == "hotelvenues") {
        $("#" + hotel).show();
        $("#" + hotel + "suites").show();
        $("#" + hotel + "logo").show();
    }
	
		if (hotel == "hotelone") {
        $("#" + hotel).show();
        $("#" + hotel + "suites").show();
        $("#" + hotel + "logo").show();
    }

}

function hidelightbox() {
    $('#lightbox').hide();
    $('#hoteldeparis').hide();
    $('#hoteldeparissuites').hide();
    $('#hoteldeparislogo').hide();
    $('#hotelhermitage').hide();
    $('#hotelhermitagesuites').hide();
    $('#hotelhermitagelogo').hide();
    $('#hotelmcbay').hide();
    $('#hotelmcbaysuites').hide();
    $('#hotelmcbaylogo').hide();
    $('#hotelbeach').hide();
    $('#hotelbeachsuites').hide();
    $('#hotelbeachlogo').hide();
    $('#hotelthermes').hide();
    $('#hotelthermessuites').hide();
    $('#hotelthermeslogo').hide();
    $('#hotelaeriennes').hide();
    $('#hotelaeriennessuites').hide();
    $('#hotelaerienneslogo').hide();
    $('#hotelcasinos').hide();
    $('#hotelcasinossuites').hide();
    $('#hotelcasinoslogo').hide();
    $('#hotelbuddhabar').hide();
    $('#hotelbuddhabarsuites').hide();
    $('#hotelbuddhabarlogo').hide();
    $('#hotelrascasse').hide();
    $('#hotelrascassesuites').hide();
    $('#hotelrascasselogo').hide();
    $('#hotelcdp').hide();
    $('#hotelcdpsuites').hide();
    $('#hotelcdplogo').hide();
    $('#hotelsporting').hide();
    $('#hotelsportingsuites').hide();
    $('#hotelsportinglogo').hide();
    $('#hotelvigie').hide();
    $('#hotelvigiesuites').hide();
    $('#hotelvigielogo').hide();
	$('#hotelvenues').hide();
    $('#hotelvenuessuites').hide();
    $('#hotelvenueslogo').hide();
	$('#hotelone').hide();
    $('#hotelonesuites').hide();
	$('#hotelonelogo').hide();
    $('.close-bottom').hide();
    $('.bottom').show();
    
}



/* ______________________ SLIDER MENU HOTEL _________________________________________ */

var taillefleche = document.getElementById("arrow-left").style.width;
document.getElementById("bandeau-slider").style.left = taillefleche;
var slider = document.getElementById("bandeau-slider");


function sliderighth() {
    slider.style.WebkitTransform = "translateX(-33.33%)";
    slider.style.webkitTransition = 'all 0.3s linear';
    slider.style.MozTransform = "translateX(-33.33%)";
    slider.style.MozTransform = 'all 0.3s linear';
    slider.style.transform = "translateX(-33.33%)";
    slider.style.transition = 'all 0.3s linear';
}

function sliderighth2() {
    slider.style.WebkitTransform = "translateX(-66.66%)";
    slider.style.webkitTransition = 'all 0.3s linear';
    slider.style.MozTransform = "translateX(-66.66%)";
    slider.style.MozTransform = 'all 0.3s linear';
    slider.style.transform = "translateX(-66.66%)";
    slider.style.transition = 'all 0.3s linear';
}

function sliderleft() {
    slider.style.WebkitTransform = "translateX(0%)";
    slider.style.webkitTransition = 'all 0.3s linear';
    slider.style.MozTransform = "translateX(0%)";
    slider.style.MozTransform = 'all 0.3s linear';
    slider.style.transform = "translateX(0%)";
    slider.style.transition = 'all 0.3s linear';
}

function sliderleft2() {
    slider.style.WebkitTransform = "translateX(-33.33%)";
    slider.style.webkitTransition = 'all 0.3s linear';
    slider.style.MozTransform = "translateX(-33.33%)";
    slider.style.MozTransform = 'all 0.3s linear';
    slider.style.transform = "translateX(-33.33%)";
    slider.style.transition = 'all 0.3s linear';
}










/* ______________________ LIENS GALERIES PHOTOS DEPUIS LES ETABLISSEMENTS _________________________________________ */

function accesgalerie() {
    if (hotel == "hoteldeparis") {
        $('.menu_general_galeries_photos').hide();
        $('#menu-galerie-hdp').show();
    }
    if (hotel == "hotelhermitage") {
        $('.menu_general_galeries_photos').hide();
        $('#menu-galerie-hh').show();
    }
    if (hotel == "hotelmcbay") {
        $('.menu_general_galeries_photos').hide();
        $('#menu-galerie-mcb').show();
    }
    if (hotel == "hotelbeach") {
        $('.menu_general_galeries_photos').hide();
        $('#menu-galerie-beach').show();
    }
    if (hotel == "hotelthermes") {
        thermes_galerie_chargement();
        $('#thermes-galerie').show();
        $('#fermer-menu-photo-thermes').show();
        $('#retour-menu-photo-thermes').show();
    }
    if (hotel == "hotelcdp") {
        cdp_galerie_chargement();
        $('#cdp-galerie').show();
        $('#fermer-menu-photo-cdp').show();
        $('#retour-menu-photo-cdp').show();
    }
    if (hotel == "hotelcasinos") {
        casinos_galerie_chargement();
        $('#casinos-galerie').show();
        $('#fermer-menu-photo-casinos').show();
        $('#retour-menu-photo-casinos').show();
    }
    if (hotel == "hotelsporting") {
        sporting_galerie_chargement();
        $('#sporting-galerie').show();
        $('#fermer-menu-photo-sporting').show();
        $('#retour-menu-photo-sporting').show();
    }
    if (hotel == "hotelbuddhabar") {
        buddhabar_galerie_chargement();
        $('#buddhabar-galerie').show();
        $('#fermer-menu-photo-buddhabar').show();
        $('#retour-menu-photo-buddhabar').show();
    }
    if (hotel == "hotelrascasse") {
        rascasse_galerie_chargement();
        $('#rascasse-galerie').show();
        $('#fermer-menu-photo-rascasse').show();
        $('#retour-menu-photo-rascasse').show();
    }
    if (hotel == "hotelvigie") {
        vigie_galerie_chargement();
        $('#vigie-galerie').show();
        $('#fermer-menu-photo-vigie').show();
        $('#retour-menu-photo-vigie').show();
    }
	
 if (hotel == "hotelone") {
        galerie_one();
        $('#menu-galerie-one').show();
        $('#fermer-menu-photo-extra').show();
        $('#retour-menu-photo-extra').show();
    }
	
    if (hotel == "hotelaeriennes") {
        $('.menu_general_galeries_photos').show();
    }

}

function galerie_hotel_HH() {
    $('#menu-galerie-hh').show();
    $('.menu_general_galeries_photos').hide();
}

function galerie_hotel_HDP() {
    $('#menu-galerie-hdp').show();
    $('.menu_general_galeries_photos').hide();
}

function galerie_hotel_mcb() {
    $('#menu-galerie-mcb').show();
    $('.menu_general_galeries_photos').hide();
}

function galerie_hotel_beach() {
    $('#menu-galerie-beach').show();
    $('.menu_general_galeries_photos').hide();
}

function galerie_one() {
    $('#menu-galerie-one').show();
    $('.menu_general_galeries_photos').hide();
}







/* ______________________ GALERIE PHOTOS HOTEL HERMITAGE _________________________________________ */


function hh_facade_galerie_chargement() {
    document.getElementById('hh-facade-galerie').src = "galeries-photos/hh/hh-facade-galerie.html";
}

function hh_facade_galerie_dechargement() {
    document.getElementById('hh-facade-galerie').src = "";
}

function hh_room_galerie_chargement() {
    document.getElementById('hh-room-galerie').src = "galeries-photos/hh/hh-room-galerie.html";
}

function hh_room_galerie_dechargement() {
    document.getElementById('hh-room-galerie').src = "";
}

function hh_resto_galerie_chargement() {
    document.getElementById('hh-resto-galerie').src = "galeries-photos/hh/hh-resto-galerie.html";
}

function hh_resto_galerie_dechargement() {
    document.getElementById('hh-resto-galerie').src = "";
}

function hh_meeting_galerie_chargement() {
    document.getElementById('hh-meeting-galerie').src = "galeries-photos/hh/hh-meeting-galerie.html";
}

function hh_meeting_galerie_dechargement() {
    document.getElementById('hh-meeting-galerie').src = "";
}

function hh_leisure_galerie_chargement() {
    document.getElementById('hh-leisure-galerie').src = "galeries-photos/hh/hh-leisure-galerie.html";
}

function hh_leisure_galerie_dechargement() {
    document.getElementById('hh-leisure-galerie').src = "";
}





/* ______________________ GALERIE PHOTOS HOTEL DE PARIS _________________________________________ */


function hdp_facade_galerie_chargement() {
    document.getElementById('hdp-facade-galerie').src = "galeries-photos/hdp/hdp-facade-galerie.html";
}

function hdp_facade_galerie_dechargement() {
    document.getElementById('hdp-facade-galerie').src = "";
}

function hdp_room_galerie_chargement() {
    document.getElementById('hdp-room-galerie').src = "galeries-photos/hdp/hdp-room-galerie.html";
}

function hdp_room_galerie_dechargement() {
    document.getElementById('hdp-room-galerie').src = "";
}

function hdp_resto_galerie_chargement() {
    document.getElementById('hdp-resto-galerie').src = "galeries-photos/hdp/hdp-resto-galerie.html";
}

function hdp_resto_galerie_dechargement() {
    document.getElementById('hdp-resto-galerie').src = "";
}

function hdp_meeting_galerie_chargement() {
    document.getElementById('hdp-meeting-galerie').src = "galeries-photos/hdp/hdp-meeting-galerie.html";
}

function hdp_meeting_galerie_dechargement() {
    document.getElementById('hdp-meeting-galerie').src = "";
}

function hdp_leisure_galerie_chargement() {
    document.getElementById('hdp-leisure-galerie').src = "galeries-photos/hdp/hdp-leisure-galerie.html";
}

function hdp_leisure_galerie_dechargement() {
    document.getElementById('hdp-leisure-galerie').src = "";
}





/* ______________________ GALERIE PHOTOS HOTEL MONTE CARLO BAY _________________________________________ */


function mcb_facade_galerie_chargement() {
    document.getElementById('mcb-facade-galerie').src = "galeries-photos/mcb/mcb-facade-galerie.html";
}

function mcb_facade_galerie_dechargement() {
    document.getElementById('mcb-facade-galerie').src = "";
}

function mcb_room_galerie_chargement() {
    document.getElementById('mcb-room-galerie').src = "galeries-photos/mcb/mcb-room-galerie.html";
}

function mcb_room_galerie_dechargement() {
    document.getElementById('mcb-room-galerie').src = "";
}

function mcb_resto_galerie_chargement() {
    document.getElementById('mcb-resto-galerie').src = "galeries-photos/mcb/mcb-resto-galerie.html";
}

function mcb_resto_galerie_dechargement() {
    document.getElementById('mcb-resto-galerie').src = "";
}

function mcb_meeting_galerie_chargement() {
    document.getElementById('mcb-meeting-galerie').src = "galeries-photos/mcb/mcb-meeting-galerie.html";
}

function mcb_meeting_galerie_dechargement() {
    document.getElementById('mcb-meeting-galerie').src = "";
}

function mcb_leisure_galerie_chargement() {
    document.getElementById('mcb-leisure-galerie').src = "galeries-photos/mcb/mcb-leisure-galerie.html";
}

function mcb_leisure_galerie_dechargement() {
    document.getElementById('mcb-leisure-galerie').src = "";

}




/* ______________________ GALERIE PHOTOS HOTEL MONTE CARLO BEACH _________________________________________ */


function beach_facade_galerie_chargement() {
    document.getElementById('beach-facade-galerie').src = "galeries-photos/beach/beach-facade-galerie.html";
}

function beach_facade_galerie_dechargement() {
    document.getElementById('beach-facade-galerie').src = "";
}

function beach_room_galerie_chargement() {
    document.getElementById('beach-room-galerie').src = "galeries-photos/beach/beach-room-galerie.html";
}

function beach_room_galerie_dechargement() {
    document.getElementById('beach-room-galerie').src = "";
}

function beach_resto_galerie_chargement() {
    document.getElementById('beach-resto-galerie').src = "galeries-photos/beach/beach-resto-galerie.html";
}

function beach_resto_galerie_dechargement() {
    document.getElementById('beach-resto-galerie').src = "";
}

function beach_meeting_galerie_chargement() {
    document.getElementById('beach-meeting-galerie').src = "galeries-photos/beach/beach-meeting-galerie.html";
}

function beach_meeting_galerie_dechargement() {
    document.getElementById('beach-meeting-galerie').src = "";
}

function beach_leisure_galerie_chargement() {
    document.getElementById('beach-leisure-galerie').src = "galeries-photos/beach/beach-leisure-galerie.html";
}

function beach_leisure_galerie_dechargement() {
    document.getElementById('beach-leisure-galerie').src = "";

}



/* ______________________ GALERIE PHOTOS ONE MONTE CARLO _________________________________________ */


function one_confernce_galerie_chargement() {
    document.getElementById('one-conference-galerie').src = "galeries-photos/one-montecarlo/conference-galerie.html";
}

function one_confernce_galerie_dechargement() {
    document.getElementById('one-conference-galerie').src = "";
}

function one_district_galerie_chargement() {
    document.getElementById('one-district-galerie').src = "galeries-photos/one-montecarlo/district-galerie.html";
}

function one_district_galerie_dechargement() {
    document.getElementById('one-district-galerie').src = "";
}

function one_leisure_galerie_chargement() {
    document.getElementById('one-leisure-galerie').src = "galeries-photos/one-montecarlo/leisure-galerie.html";
}

function one_leisure_galerie_dechargement() {
    document.getElementById('one-leisure-galerie').src = "";
}

function one_restaurant_galerie_chargement() {
    document.getElementById('one-restaurant-galerie').src = "galeries-photos/one-montecarlo/restaurant-galerie.html";
}

function one_restaurant_galerie_dechargement() {
    document.getElementById('one-restaurant-galerie').src = "";
}





/* ______________________ GALERIE PHOTOS THERMES MARINS _________________________________________ */


function thermes_galerie_chargement() {
    document.getElementById('thermes-galerie').src = "galeries-photos/thermes/thermes-galerie.html";
}

function thermes_galerie_dechargement() {
    document.getElementById('thermes-galerie').src = "";
}


/* ______________________ GALERIE PHOTOS SPORTING _________________________________________ */


function sporting_galerie_chargement() {
    document.getElementById('sporting-galerie').src = "galeries-photos/sporting/sporting-galerie.html";
}

function sporting_galerie_dechargement() {
    document.getElementById('sporting-galerie').src = "";
}


/* ______________________ GALERIE PHOTOS CAFE DE PARIS _________________________________________ */


function cdp_galerie_chargement() {
    document.getElementById('cdp-galerie').src = "galeries-photos/cdp/cdp-galerie.html";
}

function cdp_galerie_dechargement() {
    document.getElementById('cdp-galerie').src = "";
}


/* ______________________ GALERIE PHOTOS CASINOS _________________________________________ */


function casinos_galerie_chargement() {
    document.getElementById('casinos-galerie').src = "galeries-photos/casinos/casinos-galerie.html";
}

function casinos_galerie_dechargement() {
    document.getElementById('casinos-galerie').src = "";
}


/* ______________________ GALERIE PHOTOS BUDDHABAR _________________________________________ */


function buddhabar_galerie_chargement() {
    document.getElementById('buddhabar-galerie').src = "galeries-photos/buddhabar/buddhabar-galerie.html";
}

function buddhabar_galerie_dechargement() {
    document.getElementById('buddhabar-galerie').src = "";
}


/* ______________________ GALERIE PHOTOS RASCASSE _________________________________________ */


function rascasse_galerie_chargement() {
    document.getElementById('rascasse-galerie').src = "galeries-photos/rascasse/rascasse-galerie.html";
}

function rascasse_galerie_dechargement() {
    document.getElementById('rascasse-galerie').src = "";
}


/* ______________________ GALERIE PHOTOS LA VIGIE _________________________________________ */


function vigie_galerie_chargement() {
    document.getElementById('vigie-galerie').src = "galeries-photos/vigie/vigie-galerie.html";
}

function vigie_galerie_dechargement() {
    document.getElementById('vigie-galerie').src = "";
}


/* ______________________ GALERIE PHOTOS LIEUX D'EXCEPTION _________________________________________ */


function extra_galerie_chargement() {
    document.getElementById('extra-galerie').src = "galeries-photos/one-montecarlo/onemontecarlo-galerie.html";
}

function extra_galerie_dechargement() {
    document.getElementById('extra-galerie').src = "";
}









/* ______________________ CACHER/AFFICHER PICTO GALERIE _________________________________________ */

function krpano6() {
    return document.getElementById("krpanoSWFObject");
}


function timerpictophoto() {
    myVar = setTimeout(testpictogalerie, 30);
}


function testpictogalerie() {
    var galeriephoto = krpano6().get('scene[get(xml.scene)].galeriephoto');
    if (galeriephoto == "oui") {

        $('#photo').show();
    } else if (galeriephoto != "oui") {
        $('#photo').hide();

    }
}


/* ______________________ CACHER/AFFICHER PICTO RESERVATION _________________________________________ */

function krpano12() {
    return document.getElementById("krpanoSWFObject");
}


function timerpictoresa() {
    myVar = setTimeout(testpictoresa, 30);
}


function testpictoresa() {
    var resa = krpano2().get('scene[get(xml.scene)].resa');
    
    var resaurl = krpano2().get('scene[get(xml.scene)].resaurl');
    
    if(resa == "oui"){
        $("#resa").show();
        document.getElementById('resa').href = resaurl;
    } else if (resa != "oui") {
        $('#resa').hide();

    }
}







/* ______________________ CACHER/AFFICHER PICTO VIDEO _________________________________________ */

function krpano6() {
    return document.getElementById("krpanoSWFObject");
}


function timerpictovideo() {
    myVar = setTimeout(testpictovideo, 30);
}


function testpictovideo() {
    var galerievideo = krpano6().get('scene[get(xml.scene)].galerievideo');
    if (galerievideo == "oui") {
        $('#video').show();
    } else if (galerievideo != "oui") {
        $('#video').hide();
    }
}




/* ______________________ CACHER/AFFICHER PICTO INFO _________________________________________ */

function timerpictoinfo() {
    myVar = setTimeout(testinfo, 30);
}

function testinfo() {
    var verifinfo = krpano6().get('scene[get(xml.scene)].info');
    var infourl = krpano6().get('scene[get(xml.scene)].infourl');
    var dossier = krpano6().get('scene[get(xml.scene)].dossier');
    var dossier = krpano6().get('scene[get(xml.scene)].dossier');
    var sousdossier = krpano6().get('scene[get(xml.scene)].sousdossier');
    if (verifinfo == "oui" && infourl) {
        $('#info').show();
        document.getElementById("infos").innerHTML = '<iframe src=' + infourl + '/>';
    } else if (verifinfo != "oui") {
        $('#info').hide();
    }
}



/* ______________________ AFFICHAGE DES PLANS _________________________________________ */

function plans() {

    $('#plans').show();
    $('#fermer-plans').show();
    var verifplan = krpano6().get('scene[get(xml.scene)].name');
    
        
   
    /* ______________________ PLANS / GENERAL _________________________________________ */
    
    if (verifplan == "scene_casino100m") {
        document.getElementById('plans').src = "infos/plangeneral.htm";
    }
    
    

    
    
    
    
        
    /* ______________________ PLANS / HOTEL DE PARIS _________________________________________ */
    
    
    if (verifplan == "scene_salon_jacques1") {
        document.getElementById('plans').src = "infos/HDP-PrinceJacquesI.htm";
    }
    
    if (verifplan == "scene_empire") {
        document.getElementById('plans').src = "infos/HDP-SalleEmpire.htm";
    }
    
     if (verifplan == "scene_churchill") {
        document.getElementById('plans').src = "infos/HDP-Churchill.htm";
    }
    
    if (verifplan == "scene_salon_charles3") {
        document.getElementById('plans').src = "infos/HDP-PrinceCharlesIII.htm";
    }
    
      if (verifplan == "scene_salon_hippolyte") {
        document.getElementById('plans').src = "infos/HDP-PrincesseLouiseHippolyte.htm";
    }
    
    if (verifplan == "scene_caveroom") {
        document.getElementById('plans').src = "infos/HDP-Private-Banqueting-Room.htm";
    }
    
    if (verifplan == "scene_cavecouloir") {
        document.getElementById('plans').src = "infos/HDP-WineCellars.htm";
    }
    
    if (verifplan == "scene_cavecroisee") {
        document.getElementById('plans').src = "infos/HDP-WineCellars.htm";
    }
    
    if (verifplan == "scene_cavemusee") {
        document.getElementById('plans').src = "infos/HDP-WineCellars.htm";
    }
    
    if (verifplan == "scene_grill_roof") {
        document.getElementById('plans').src = "infos/HDP-Grill-terrace.htm";
    }
    
    if (verifplan == "scene_grill_hb_2") {
        document.getElementById('plans').src = "infos/HDP-Grill-terrace.htm";
    }
    
    if (verifplan == "scene_ducasse") {
        document.getElementById('plans').src = "infos/HDP-Louis-XV-terrace.htm";
    }
    
    

    
    
    
    
    
     /* ______________________ PLANS / HOTEL HERMITAGE _________________________________________ */
    
    
    if (verifplan == "scene_belleepoq" || verifplan == "scene_belle_epoq_repas") {
        document.getElementById('plans').src = "infos/HH-SalleBelle Epoque.htm";
    }
    if (verifplan == "scene_eiffel_2017") {
        document.getElementById('plans').src = "infos/HH-salleEiffel.htm";
    }
    if (verifplan == "scene_eiffel_banquet1") {
        document.getElementById('plans').src = "infos/HH-salleEiffel.htm";
    }
    if (verifplan == "scene_eiffel_banquet2") {
        document.getElementById('plans').src = "infos/HH-salleEiffel.htm";
    }
    if (verifplan == "scene_eiffel_conference1") {
        document.getElementById('plans').src = "infos/HH-salleEiffel.htm";
    }
    if (verifplan == "scene_eiffel_conference2") {
        document.getElementById('plans').src = "infos/HH-salleEiffel.htm";
    }
    if (verifplan == "scene_mezzanine_eiffel") {
        document.getElementById('plans').src = "infos/HH-mezzanine_eiffel.htm";
    }
    if (verifplan == "scene_salon_jardin_hiver") {
        document.getElementById('plans').src = "infos/HH-Salon_Jardin_Hiver.htm";
    }
    if (verifplan == "scene_excelsior") {
        document.getElementById('plans').src = "infos/HH-salonExcelsior.htm";
    }
    if (verifplan == "scene_hermitage_terrasse_midi") {
        document.getElementById('plans').src = "infos/HH-Terrasse-Midi.htm";
    }
    if (verifplan == "scene_mezzanine_terrasse") {
        document.getElementById('plans').src = "infos/salleEiffelTerrasseMezanine.htm";
    }
    if (verifplan == "scene_hh_pavyllon_terrace" || verifplan == "scene_hh_pavyllon_salon" || verifplan == "scene_hh_pavyllon_terrace2") {
        document.getElementById('plans').src = "infos/HH-Pavyllon-Monte-Carlo.htm";
    }
    
    
    
    /* ______________________ PLANS / HOTEL MCBAY _________________________________________ */
    
    
    
    if (verifplan == "scene_sincerity") {
        document.getElementById('plans').src = "infos/MCBay-salonSincerity.htm";
    }
    if (verifplan == "scene_sincerity2") {
        document.getElementById('plans').src = "infos/MCBay-salonSincerity.htm";
    }
    if (verifplan == "scene_baycolombia") {
        document.getElementById('plans').src = "infos/MCBay-salleColumbia.htm";
    }
    if (verifplan == "scene_mcbayconference") {
        document.getElementById('plans').src = "infos/MCBay-salleAmerica.htm";
    }
    if (verifplan == "scene_jardin_medit_jour") {
        document.getElementById('plans').src = "infos/MCBay-Jardin-mediterraneen.htm";
    }
    if (verifplan == "scene_jardin_medit_nuit") {
        document.getElementById('plans').src = "infos/MCBay-Jardin-mediterraneen.htm";
    }
    if (verifplan == "scene_jardins_mediterraneens") {
        document.getElementById('plans').src = "infos/MCBay-Jardin-mediterraneen.htm";
    }
      if (verifplan == "scene_bluebay") {
        document.getElementById('plans').src = "infos/MCBeach-blueBay.htm";
    }
    if (verifplan == "scene_cuisine") {
        document.getElementById('plans').src = "infos/MCBeach-blueBay.htm";
    }
	 if (verifplan == "scene_bluebay_terrasse") {
        document.getElementById('plans').src = "infos/MCBeach-blueBay.htm";
    }
    if (verifplan == "scene_bluegin") {
        document.getElementById('plans').src = "infos/MCBay-blueGin.htm";
    }
    if (verifplan == "scene_bluegin_terrasse") {
        document.getElementById('plans').src = "infos/MCBay-blueGin.htm";
    }
    if (verifplan == "scene_lagoon_sphere") {
        document.getElementById('plans').src = "infos/Lagon-Area.htm";
    }
    if (verifplan == "scene_lagon_nuit_haut") {
        document.getElementById('plans').src = "infos/Lagon-Area.htm";
    }
    if (verifplan == "scene_lagon_jour_haut") {
        document.getElementById('plans').src = "infos/Lagon-Area.htm";
    }
    if (verifplan == "scene_lagonHB1") {
        document.getElementById('plans').src = "infos/Lagon-Area.htm";
    }
    if (verifplan == "scene_lagonjour") {
        document.getElementById('plans').src = "infos/Lagon-Area.htm";
    }
    if (verifplan == "scene_lagonresto") {
        document.getElementById('plans').src = "infos/Lagon-Area.htm";
    }
    if (verifplan == "scene_bay_salon_tuiga") {
        document.getElementById('plans').src = "infos/MCBay-Tuiga.htm";
    }
    if (verifplan == "scene_salle_trivia") {
        document.getElementById('plans').src = "infos/MCBay-Trivia.htm";
    }
    if (verifplan == "scene_viola" || verifplan == "scene_viola2") {
        document.getElementById('plans').src = "infos/MCBay-Viola.htm";
    }
    if (verifplan == "scene_salle_nyala") {
        document.getElementById('plans').src = "infos/MCBay-Nyala.htm";
    }
    if (verifplan == "scene_salle_nirvana") {
        document.getElementById('plans').src = "infos/MCBay-Nirvana.htm";
    }
    
    
    
    
    /* ______________________ PLANS / HOTEL MCBEACH _________________________________________ */
    
    
      if (verifplan == "scene_deck") {
         
        document.getElementById('plans').src = "infos/MCBeach-ledeck.htm";
    }
   
    
        if (verifplan == "scene_elsa_terrace") {
        document.getElementById('plans').src = "infos/MCBeach-ElsaTerrace.htm";
    }
    
    if (verifplan == "scene_elsa") {
        document.getElementById('plans').src = "infos/MCBeach-ElsaTerrace.htm";
    }
    

        
        
    
   /* ______________________ PLANS / ONE _________________________________________ */   
            
            
    if (verifplan == "scene_one_cocteau_expo") {
        document.getElementById('plans').src = "infos/ONE-Salle_Jean_Cocteau.htm";
    }
        
    if (verifplan == "scene_one_cocteau_banquet") {
        document.getElementById('plans').src = "infos/ONE-Salle_Jean_Cocteau.htm";
    } 
        
    if (verifplan == "scene_one_cocteau_theatre") {
        document.getElementById('plans').src = "infos/ONE-Salle_Jean_Cocteau.htm";
    }   
       
     if (verifplan == "scene_arman") { 
        document.getElementById('plans').src = "infos/ONE-Salle_Arman.htm";
    }
        
    if (verifplan == "scene_arman1") { 
        document.getElementById('plans').src = "infos/ONE-Salle_Arman.htm";
    }
    
    if (verifplan == "scene_one_salle_des_arts_theatre"||verifplan == "scene_arts_banquet") {
        document.getElementById('plans').src = "infos/ONE-Salle_des_Arts.htm";
    }
    
    if (verifplan == "scene_auditorium") {
        document.getElementById('plans').src = "infos/ONE-Ampthitheatre.htm";
    }
    
    
    
    
    
     /* ______________________ PLANS / SPORTING _________________________________________ */   
    
        
        
    if (verifplan == "scene_show_sphere" || verifplan == "scene_repas_sphere" || verifplan == "scene_jour_sphere" || verifplan == "scene_centre-scene_sphere"  || verifplan == "scene_salle_des_etoiles_mat") {
        document.getElementById('plans').src = "infos/SPORTING-salledesetoiles.htm";
    }
    
    if (verifplan == "scene_palmier1" || verifplan == "scene_palmier2") {
        document.getElementById('plans').src = "infos/SPORTING-salledespalmiers.htm";
    }
        
    if (verifplan == "scene_01jimmyz_out1") {
        document.getElementById('plans').src = "infos/SPORTING-Jimmiz.htm";
    }
    
    if (verifplan == "scene_02jimmyz_out_2") {
        document.getElementById('plans').src = "infos/SPORTING-Jimmiz.htm";
    }
    
    if (verifplan == "scene_03piste") {
        document.getElementById('plans').src = "infos/SPORTING-Jimmiz.htm";
    }
    
    if (verifplan == "scene_04vip") {
        document.getElementById('plans').src = "infos/SPORTING-Jimmiz.htm";
    }
    
    if (verifplan == "scene_05dompe") {
        document.getElementById('plans').src = "infos/SPORTING-Jimmiz.htm";
    }
    
    if (verifplan == "scene_coya_out" || verifplan == "scene_coya_dining" || verifplan == "scene_coya_lounge") {
        document.getElementById('plans').src = "infos/SPORTING-Coya.htm";
    }
    
    
       /* ______________________ PLANS / THERMES_________________________________________ */  
    
    if (verifplan == "scene_14resto") {
        document.getElementById('plans').src = "infos/THERMES-Hirodelle.htm";
    }
    
    
    /* ______________________ PLANS / CAFE DE PARIS
    
    if (verifplan == "scene_cdpterrasse" || verifplan == "scene_cdpbrasserie") {
        document.getElementById('plans').src = "infos/cafedeparis.htm";
    }
     _________________________________________ */
    
    
    /* ______________________ PLANS / BUDDHABAR _________________________________________ */  
    
    if (verifplan == "scene_buddhahaut") {
        document.getElementById('plans').src = "infos/Buddha_Bar_restaurant.htm";
    }
    if (verifplan == "scene_buddhabas") {
        document.getElementById('plans').src = "infos/Buddha_Bar_lounge.htm";
    }
    if (verifplan == "scene_privetable" || verifplan == "scene_privecanape") {
        document.getElementById('plans').src = "infos/Buddha_Bar_restaurant.htm";
    }
    
    
    
    
    /* ______________________ PLANS / LA RASCASSE _________________________________________ */  
    
    if (verifplan == "scene_rascasse1") {
        document.getElementById('plans').src = "infos/LaRascasseGroundFloor.htm";
    }
    if (verifplan == "scene_rascasseext") {
        document.getElementById('plans').src = "infos/LaRascasseGroundFloor.htm";
    }
    if (verifplan == "scene_rascasseetage") {
        document.getElementById('plans').src = "infos/LaRascasseFirstFloor.htm";
    }
    
    
    
    
    /* ______________________ PLANS / LA VIGIE _________________________________________ */  
    
    if (verifplan == "scene_salon" || verifplan == "scene_billard" || verifplan == "scene_sam") {
        document.getElementById('plans').src = "infos/Lavigie.htm";
            
     }     
    
    
    
  
    
    

    
    
    
    
    


	if (verifplan == "scene_18jacuzzi") {
        document.getElementById('plans').src = "infos/Hirodelle.htm";
    }
	if (verifplan == "scene_18jacuzziday") {
        document.getElementById('plans').src = "infos/Hirodelle.htm";
    }
	if (verifplan == "scene_19poolterrasse") {
        document.getElementById('plans').src = "infos/Hirodelle.htm";
    }
    if (verifplan == "scene_bellenuit") {
        document.getElementById('plans').src = "infos/SalonBellevue.htm";
    }
    if (verifplan == "scene_bellevuejour") {
        document.getElementById('plans').src = "infos/SalonBellevue.htm";
    }
    if (verifplan == "scene_verriere_sphere") {
        document.getElementById('plans').src = "infos/SalonBellevue.htm";
    }

    
    

    



    if (verifplan == "scene_vigie_centre_day"||verifplan == "scene_vigie_lounge_nuit"||verifplan == "scene_vigie_resto") {
        document.getElementById('plans').src = "infos/restaurant-vigie.htm";
    }
    

    


       if (verifplan == "scene_atrium") {
        document.getElementById('plans').src = "infos/Cafe_de_la_rotonde.htm";
    }
   
}


var etablissementhotels = "";

function hdpplan() {
    
    etablissementhotels = "Hôtel de Paris Monte-Carlo";
    myVar = setTimeout(planshotels, 30);
}
function hhpplan() {
    etablissementhotels = "Hôtel Hermitage Monte-Carlo";
    myVar = setTimeout(planshotels, 30);
}
function mcbpplan() {
    etablissementhotels = "Monte-Carlo Bay Hotel";
    myVar = setTimeout(planshotels, 30);
}
function beachplan() {
    etablissementhotels = "Monte-Carlo Beach";
    myVar = setTimeout(planshotels, 30);
}

function oneplan() {
   
    etablissementhotels = "One Monte-Carlo";
    myVar = setTimeout(planshotels, 30);
}


function planshotels() {
    $('#plans').show();
    $('#fermer-plans').show();
    if (etablissementhotels == "Hôtel de Paris Monte-Carlo") {
        document.getElementById('plans').src = "infos/hdp-meetingroomsguide.htm";
    }  
    if (etablissementhotels == "Hôtel Hermitage Monte-Carlo") {
        document.getElementById('plans').src = "infos/hh-meetingroomsguide.htm";
    }  
    if (etablissementhotels == "Monte-Carlo Bay Hotel") {
        document.getElementById('plans').src = "infos/mcbay-meetingroomsguide.htm";
    }  
    if (etablissementhotels == "Monte-Carlo Beach") {
        document.getElementById('plans').src = "infos/mcbeach-meetingroomsguide.htm";
    }  
    if (etablissementhotels == "One Monte-Carlo") {
        document.getElementById('plans').src = "infos/one-meetingroomsguide.htm";
    }
}





function getprogress() {
    var krpano = document.getElementById("krpanoSWFObject");
    if (krpano && krpano.get) {
        var progress = Math.round(krpano.get("progress.progress") * 100);
        //var progress = Math.round(krpano.get('scene[get(xml.scene)].progress.progress') * 100);
        return progress;
    }
}

function setprogress() {
    var krpano = document.getElementById("krpanoSWFObject");
    if (krpano && krpano.get) {
        var progress = getprogress();
        if (progress < 100) {
            $("#progresspercent span").html(progress);
            /* PATCH 12/2021 (3) */
            if($().progressbar) $("#progressbar").progressbar({ value: progress });

        } else {
            var title = krpano2().get('scene[get(xml.scene)].title');
            document.getElementById("titre").innerHTML = "<span>" + hotel + "</span>" + " - " + title;
            $("#progressbox").remove();
            clearInterval(progress_interval);
        }
    }
}

var progress_interval = setInterval('setprogress()', 66);


function timernomdehotel() {
    myVar = setTimeout(nomdehotel, 30);
}

function nomdehotel() {
    hotel = "Vue aerienne";
    var title = krpano2().get('scene[get(xml.scene)].title');
    document.getElementById("titre").innerHTML = "<span>" + hotel + "</span>" + " - " + title;
}

function resethotel() {
    document.getElementById("titre").innerHTML = "";
}



/* ______________________ CACHER/AFFICHER PICTOS VUE INITIALE _________________________________________ */

function cacherpictos() {
    timeraspectvignette();
    timerpictophoto();
    timerpictovideo();
    timerpictoinfo();
    timerpictoresa();
}


function carte_cercle() {
    $('#carte-cercle-generique').show();
    $('#fermer-carte-cercle').show();
    if (hotel == "hoteldeparis" || hotel == "hotelhermitage" || hotel == "hotelbeach") {
        document.getElementById('carte-cercle-generique').data = "cartes-cercle/carte-cercle-generique/carte_cercle_hp_hh_bh.html";
    } else if (hotel == "hotelmcbay") {
        document.getElementById('carte-cercle-generique').data = "cartes-cercle/carte-cercle-generique/carte_cercle_bay.html";
    } else {
        document.getElementById('carte-cercle-generique').data = "cartes-cercle/carte-cercle-generique/carte_cercle_generique.html";
    }

}




function carte_cercle_retour() {
    $('#carte-cercle-generique').hide();
    $('#fermer-carte-cercle').hide();
    document.getElementById('carte-cercle-generique').src = "";

}
function testlolo(){
    alert(hotel);
}


/* ______________________ CACHER/AFFICHER PICTOS VUE INITIALE _________________________________________ */


function addListener(element, type, callback) {
	if(element.addEventListener) element.addEventListener(type, callback);
	else if(element.attachEvent) element.attachEvent('on' + type, callback);
	}





