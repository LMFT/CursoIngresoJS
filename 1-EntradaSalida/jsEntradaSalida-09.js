/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//Declaro las variables
	let sueldo=document.getElementById("txtIdNumeroDivisor").value;
	let resultado;

	//Convierto el sueldo a numero
	sueldo=parseInt(sueldo);
	
	//Aplico el incremento
	resultado= sueldo*1.1;

	//Muestro el resultado por el cuadro de texto
	document.getElementById("txtIdResultado").value=resultado;
}
