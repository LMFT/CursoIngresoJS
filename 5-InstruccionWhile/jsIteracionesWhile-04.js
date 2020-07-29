/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	//Declaro la variable y pido el numero al usuario
	let numero;
	
	numero=prompt("Ingrese un número del 0 al 9 inclusive"); 

	numero = parseFloat(numero);

	//Mientras el usuario ingrese numeros fuera del rango muestro por alert un mensaje de error y pido nuevamente el numero
	while(numero < 0 || numero > 9) 
	{
		alert("El numero ingresado es inválido");
		numero=parseFloat(prompt("Ingrese un número del 0 al 9 inclusive"));
	}

	document.getElementById("txtIdNumero").value = numero;

}//FIN DE LA FUNCIÓN