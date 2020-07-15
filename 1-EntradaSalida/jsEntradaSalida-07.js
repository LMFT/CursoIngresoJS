/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


function sumar()
{	
	//Declaro las variables y las inicializo
	let numero_a=parseInt(document.getElementById("txtIdNumeroUno").value);
	let numero_b=parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado;

	//Realizo el cálculo
	resultado = numero_a + numero_b;

	//Muestro el resultado por alert
	alert("El resultado de la suma es: "+resultado);	
}

function restar()
{
	//Declaro las variables y las inicializo
	let numero_a=parseInt(document.getElementById("txtIdNumeroUno").value);
	let numero_b=parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado;

	//Realizo el cálculo
	resultado=numero_a-numero_b;

	//Muestro el resultado por alert
	alert("el resultado de la resta es: "+resultado); 
}

function multiplicar()
{ 
	//Declaro las variables y las inicializo
	let numero_a=parseInt(document.getElementById("txtIdNumeroUno").value);
	let numero_b=parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado;

	//Realizo el cálculo
	resultado=numero_a*numero_b;

	//Muestro el resultado por alert
	alert("El producto de los numeros es: "+resultado);
}

function dividir()
{
	//Declaro e inicializo las variables
	let numero_a=parseInt(document.getElementById("txtIdNumeroUno").value);
	let numero_b=parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado;

	//Realizo una secuencia lógica para impedir la division por 0

	//Si el divisor es 0 muestra un error por alert
	if(numero_b=="0")
		{
			
			alert("La división ingresada no es válida");
		}
	
	//Si el divisor es distinto de 0 el programa realiza el calculo y lo muestra por pantalla
	else
	{
		
		numero_a=parseInt(numero_a);
		numero_b=parseInt(numero_b);
		resultado = numero_a / numero_b;
		alert("El resultado de la division es: "+resultado);
	}
}