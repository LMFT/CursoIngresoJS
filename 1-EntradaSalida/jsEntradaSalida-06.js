/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//Declaro las variables
	let num1;
	let num2;
	let resultado;

	//Inicializo las variables
	num1=parseInt(document.getElementById("txtIdNumeroUno").value);
	num2=parseInt(document.getElementById("txtIdNumeroDos").value);

	//Realizo el caluclo y muestro el resultado por pantalla
	resultado = num1 + num2;

	alert("El resultado de la suma es "+resultado);
}

