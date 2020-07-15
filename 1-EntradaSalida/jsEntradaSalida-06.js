/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//Declaro las variables
	let numero_a;
	let numero_b;
	let resultado;

	//Inicializo las variables
	numero_a=parseInt(document.getElementById("txtIdNumeroUno").value);
	numero_b=parseInt(document.getElementById("txtIdNumeroDos").value);

	//Realizo el caluclo y muestro el resultado por pantalla
	resultado = numero_a + numero_b;

	alert("El resultado de la suma es "+resultado);
}

