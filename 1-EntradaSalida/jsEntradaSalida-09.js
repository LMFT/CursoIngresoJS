/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//Declaro las variables
	let sueldo = document.getElementById("txtIdSueldo").value;
	let aumento;
	let resultado;

	//Convierto el sueldo a numero
	sueldo=parseFloat(sueldo);

	//Calculo el aumento
	aumento = sueldo * 10 / 100;

	//Aplico el incremento
	resultado = sueldo + aumento;

	//Muestro el resultado por el cuadro de texto
	document.getElementById("txtIdResultado").value=resultado;
}
