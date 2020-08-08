function mostrar()
{
	//Declaro las variables
	let numero;
	let flag = 0;
	
	//Pido un numero y lo valido
	numero = parseInt(prompt("Ingrese un número mayor a 0"));
	while(isNaN(numero))
	{
		numero = parseInt(prompt("Error: El caracter ingresado no es un número. Reingrese un número mayor a 0"));
	}
	//Creo el bucle (for)

	for(let i=2; i <numero; i++)
	{
		//Calculo el resto de la division por i
		//Si algun resto da 0, el numero no es primo
		if((numero % i == 0 && flag == 0) || numero <=1)
		{
			flag = 1;
			mensaje = "no" + mensaje;
			break;
		}
	}
	
	
	if(flag == 1 || numero <= 1)
	{
		alert("El numero " + numero  +" no es primo");
	}
	else
	{
		alert("El numero " + numero  +" es primo");
	}
}
