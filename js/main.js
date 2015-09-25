$("#btn-no").on("click",function() {alert("palomo");});


$btnsi= $("#btn-si");
$formularioCorreo= $("#formularioCorreo");
$preguntaCorreo= $("#preguntaCorreo");
$enviarCorreo= $("#enviarCorreo");
$contactoBtn= $("#contactoBtn");
$contactoForm= $("#contactoForm");
$contactoClose= $(".icon-close");

$btnsi.on("click",function(e){

	e.preventDefault();
	console.log($formularioCorreo);
	$formularioCorreo.removeClass("invisible");
	$preguntaCorreo.addClass("invisible");
});

$enviarCorreo.on('click',function(e){

	//awesome shit should happen here
	e.preventDefault();
	alert("estas a punto de cambiar tu vida para mejor!")
});

$contactoBtn.on('click',contactoToggle);
$contactoClose.on('click',contactoToggle);



function contactoToggle(e){
// hay que mejorar este toogle para poder usarlo con el que trae por defecto
	e.preventDefault();

		$("#contacto .ocultar").fadeToggle(0.5);
		$('#contacto').toggleClass('temblar');
		$('#contacto').toggleClass('fondoAzul');
		$contactoForm.toggleClass('invisible')
		$contactoBtn.fadeToggle();

}
























