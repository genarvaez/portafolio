$(document).ready(function(){
	       
	setInterval(function(){
		$("section").css("z-index", "100");
	},3000) 
	$(".content").hide();
		$(".flecha").hide();
		$(".rightImg, .leftImg").hide();

	$(".uno").hover(function uno(){
		$(this).css("width", "85%");
		$(".dos, .tres, .cuatro").css("width", "5%");
		$(".text-entry").removeClass('bounce');
		$(".uno .text-entry").addClass('bounce');
		$(".text-entry").css("font-size", "1.1em");
		$(".uno .text-entry").css({'font-size':'3rem', 'text-shadow':'4px 4px 2px rgba(0, 0, 0, 0.79)'});
		$(".about-content").show();
		$(".barra span").css("letter-spacing", "0")
		$(".barra .about-nav").css("letter-spacing", "0.8rem")
	})

	$(".dos").hover(function dos() {
		$(this).css("width", "85%");
		$(".uno, .tres, .cuatro").css("width", "5%");
		$(".text-entry").removeClass('bounce');
		$(".dos .text-entry").addClass('bounce')
		$(".text-entry").css("font-size", "1.1em");
		$(".dos .text-entry").css({'font-size':'2.5rem', 'text-shadow':'4px 4px 2px rgba(0, 0, 0, 0.79)'});
		$(".skills-content .animated").addClass("bounceInDown");
		$(".about-content").hide();
		$(".skills-content").show();
		$(".barra span").css("letter-spacing", "0")
		$(".barra .skills-nav").css("letter-spacing", "0.8rem")
		
	});
	$(".tres").hover(function tres() {
		$(this).css("width", "85%");
		$(".uno, .dos, .cuatro").css("width", "5%");
		$(".text-entry").removeClass('bounce');
		$(".tres .text-entry").addClass('bounce');
		$(".text-entry").css("font-size", "1.1em");
		$(".tres .text-entry").css({'font-size':'2.2em', 'text-shadow':'4px 4px 2px rgba(0, 0, 0, 0.79)'});
		$(".content").hide();
		$(".project-content").show();
		$(".flecha").show();
		$(".barra span").css("letter-spacing", "0")
		$(".barra .project-nav").css("letter-spacing", "0.8rem")
	});
	$(".cuatro").hover(function cuatro() {
		$(this).css("width", "85%");
		$(".uno, .dos, .tres").css("width", "5%");		
		$(".text-entry").removeClass('bounce');
		$(".cuatro .text-entry").addClass('bounce');
		$(".text-entry").css("font-size", "1.1em");
		$(".cuatro .text-entry").css({'font-size':'2.2em', 'text-shadow':'4px 4px 2px rgba(0, 0, 0, 0.79)'});
		$(".content").hide();
		$(".barra span").css("letter-spacing", "0")
		$(".barra .contact-nav").css("letter-spacing", "0.8rem")
	}); 
	$("header").hover(function(event) {
			$(".uno, .dos, .tres, .cuatro").css("width", "25%");
			$(".content").hide();
			$(".text-entry").css("font-size", "1.5em");
			$(".barra span").css("letter-spacing", "0")
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
/*******************************************************************************************/
	
	
	var proyectos = ["img/bciCaptura.jpg" , "img/translab.png", "img/LyftCaptura.png", "img/pinterest.png"]
	var infoProyectos = [{
		nombre: "BCI CREDIHOGAR",
		vista: "MOBILE",
		descripcion: "Aplicacion para dispositivos móviles que permite autogestionar el proceso de adquisición de cŕeditos hipotecarios",
		demo: "https://genarvaez.github.io/MiCreditoBCI/",
		code: "https://github.com/genarvaez/MiCreditoBCI"
	},{
		nombre: "TRANSLAB",
		vista: "MOBILE",
		descripcion: "Aplicación móvil para la consulta de saldo, cálculo de tarifa y administracion de tardejtas BIP",
		demo: "https://genarvaez.github.io/trans-lab/",
		code: "https://github.com/genarvaez/trans-lab"
	},{
		nombre: "LYFT",
		vista: "MOBILE/DESKTOP",
		descripcion: "Aplicación móvil/web informativa y gestión de traslados bajo demanda o registro a la plataforma como conductor",
		demo: "https://genarvaez.github.io/lyft-app/",
		code: "https://github.com/genarvaez/lyft-app"
	},{
		nombre: "PINTEREST",
		vista: "DESKTOP",
		descripcion:"Simulación de contenido fluido de PINTEREST",
		demo: "https://genarvaez.github.io/pinterest/",
		code: "https://github.com/genarvaez/pinterest"
	}]

	$(".img-proyectos").hover(function(){
		$(".img-proyectos").removeClass('noOpacity')
		$(this).addClass("noOpacity");
		$(".nombreProyecto").removeClass("fadeInDown");
	})
	var elemento;
	$(".img-proyectos").click(function(){
		$(".especial").html("");

		elemento = $(this).index();
		$(".especial").append('<img class="animated fadeInUp responsive-img" src="'+proyectos[elemento]+'">');
		$(".nombre, .vista, .descripcion").html("");
		$(".nombre").html(infoProyectos[elemento].nombre);
		$(".vista").html(infoProyectos[elemento].vista);
		$(".descripcion").html(infoProyectos[elemento].descripcion);
		$(".nombreProyecto").addClass("fadeInDown");
		
		$(".demo").click(function(){
			$(this).attr('href', infoProyectos[elemento].demo);
		});
		$(".code").click(function(){
			$(this).attr('href', infoProyectos[elemento].code);
		})
	})
});

