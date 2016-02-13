

$btnsi= $("#btn-si");
$formularioCorreo= $("#formularioCorreo");
$preguntaCorreo= $("#preguntaCorreo");
$enviarCorreo= $("#enviarCorreo");
$contactoBtn= $("#contactoBtn");
$contactoForm= $("#contactoForm");
$contactoSocial= $("#contactoSocial");
$contactoClose= $(".icon-close");
$cargarMas= $("#cargarmas");


$contactoBtn.on('click',contactoToggle);
$contactoClose.on('click',contactoToggle);



function contactoToggle(e){
// hay que mejorar este toogle para poder usarlo con el que trae por defecto
	e.preventDefault();

		$("#contacto .ocultar").fadeToggle(0.5);
		$('#contacto').toggleClass('temblar');
		$('#contacto').toggleClass('fondoAzul');
		$contactoForm.toggleClass('invisible')
		// $contactoSocial.toggleClass('invisible')
		$contactoBtn.fadeToggle();

}
























