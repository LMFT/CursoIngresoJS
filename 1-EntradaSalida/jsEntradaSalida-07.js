/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


var numero_a=txtIdNumeroUno.value;
var numero_b=txtIdNumeroDos.value;
var resultado;

numero_a=parseInt(numero_a);
numero_b=parseInt(numero_b);


function sumar()
{	
	resultado = numero_a + numero_b;
	alert("El resultado de la suma es: "+resultado);	
}

function restar()
{
	resultado=numero_a-numero_b;
	alert("el resultado de la resta es: "+resultado); 
}

function multiplicar()
{ 
	resultado=numero_a*numero_b;
	alert("El producto de los numeros es: "+resultado);
}

function dividir()
{
	if(numero_b=="0")
		{
			alert("La división ingresada no es válida");
		}
	else
	{
		resultado= numero_a / numero_b;
		alert("El resultado de la division es: "+resultado);
	}
}