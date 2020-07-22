/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	
	numero=prompt("Ingrese un número del 0 al 9 inclusive"); 

	numero = parseInt(numero);

	while(numero < 0 || numero > 9) 
	{
		alert("El numero ingresado es inválido");
		numero=prompt("Ingrese un número del 0 al 9 inclusive");
	}

	document.getElementById("txtIdNumero").value = numero;

}//FIN DE LA FUNCIÓN