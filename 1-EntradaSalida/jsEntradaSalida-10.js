/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//Declaro las variables
	let importe=document.getElementById("txtIdImporte").value;
	let resultado;

	//Convierto el importe a numero
	importe=parseInt(importe);

	//Asigno el descuento
	resultado = importe * 0.75;

	//Muestro el resultado en el cuadro de texto
	document.getElementById("txtIdResultado").value=resultado;

}	