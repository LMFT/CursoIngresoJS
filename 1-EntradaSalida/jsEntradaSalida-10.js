/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//Declaro las variables
	let importe=document.getElementById("txtIdImporte").value;
	let descuento;
	let resultado;

	//Convierto el importe a numero
	importe=parseFloat(importe);

	//Calculo el descuento
	descuento = importe * 25 / 100;

	//Calculo el resultado

	resultado = importe - descuento;

	//Muestro el resultado en el cuadro de texto
	document.getElementById("txtIdResultado").value=resultado;

}	