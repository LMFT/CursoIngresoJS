function mostrar()
{
	//Declaro las variables
	let numero;
	let flag = 0;
	//Pido un numero
	numero = parseInt(prompt("Ingrese un número"));
	//Creao el bucle (for)

	for(let i=2; i <=numero; i++)
	{
		//Calculo el resto de la division por i
		//Si algun resto da 0, el numero no es primo
		if(numero % i == 0 && flag == 0 && i != numero)
		{
			flag = 1;
		}
	}
	
	
	if(flag == 1 || numero<0)
	{
		alert("No es primo")
	}
	else
	{
		alert("Es primo");
	}
}

//FIN DE LA FUNCIÓN