$(document).ready(function(){
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	        
	setInterval(function(){
		$("section").css("z-index", "100");
	},3000) 
	$(".content").hide();
	


	$(".uno").hover(function uno(){
		$(this).css("width", "85%");
		$(".dos").css("width", "5%");
		$(".tres").css("width", "5%");
		$(".cuatro").css("width", "5%");
		$(".text-entry").removeClass('bounce');
		$(".uno .text-entry").addClass('bounce');
		$(".text-entry").css("font-size", "1.1em");
		$(".uno .text-entry").css({'font-size':'3rem', 'text-shadow':'4px 4px 2px rgba(0, 0, 0, 0.79)'});
		$(".about-content").show();
	})
	$(".dos").hover(function dos() {
		$(this).css("width", "85%");
		$(".uno").css("width", "5%");
		$(".uno ").css("width", '5%');
		$(".tres").css("width", "5%");
		$(".cuatro").css("width", "5%");
		$(".text-entry").removeClass('bounce');
		$(".dos .text-entry").addClass('bounce')
		$(".text-entry").css("font-size", "1.1em");
		$(".dos .text-entry").css({'font-size':'2.5rem', 'text-shadow':'4px 4px 2px rgba(0, 0, 0, 0.79)'});
		$(".skills-content .animated").addClass("bounceInDown");
		$(".about-content").hide();
		$(".skills-content").show();

		
	});
	$(".tres").hover(function() {
		$(this).css("width", "85%");
		$(".dos").css("width", "5%");
		$(".uno").css("width", "5%");
		$(".cuatro").css("width", "5%");
		$(".text-entry").removeClass('bounce');
		$(".tres .text-entry").addClass('bounce');
		$(".text-entry").css("font-size", "1.1em");
		$(".tres .text-entry").css({'font-size':'2.2em', 'text-shadow':'4px 4px 2px rgba(0, 0, 0, 0.79)'});
		$(".content").hide();
		$(".project-content").show();
	});
	$(".cuatro").hover(function() {
		$(this).css("width", "85%");
		$(".uno").css("width", "5%");
		$(".tres").css("width", "5%");
		$(".dos").css("width", "5%");
		$(".text-entry").removeClass('bounce');
		$(".cuatro .text-entry").addClass('bounce');
		$(".text-entry").css("font-size", "1.1em");
		$(".cuatro .text-entry").css({'font-size':'2.2em', 'text-shadow':'4px 4px 2px rgba(0, 0, 0, 0.79)'});
		$(".content").hide();
	}); 
$("header").hover(function(event) {
		$(".uno, .dos, .tres, .cuatro").css("width", "25%");
		$(".content").hide();
		$(".text-entry").css("font-size", "1.5em");
	});
/************************TEXTO DINÁMICO*********************************************/
	var myDynamics = ["HELLO!", "¡HOLA!", "¡OLÁ!", "HALLO!"];

	dynamicCounter = 0;
	setInterval(function(){ 
		selectedText = myDynamics[dynamicCounter];
		thislenght = selectedText.length + 10;
		var newIntervalCount = 1;
		document.getElementById("dynamic-text").innerHTML = " ";
		var innterInterval = setInterval(function(){ 
		
			document.getElementById("dynamic-text").innerHTML = document.getElementById("dynamic-text").innerHTML + myDynamics[dynamicCounter].substring(newIntervalCount - 1 , newIntervalCount);
			newIntervalCount = newIntervalCount + 1;
			if (newIntervalCount > thislenght) {
				clearInterval(innterInterval);
			}
			
		}, 60);

		if (dynamicCounter >= 3) {
			dynamicCounter = 0;
		}else{
			dynamicCounter = dynamicCounter + 1;
		}
	}, 3000);
	
});

