function mostrar()
{
	let numero;
	for( ; numero != 9 ; )
	{
		numero = parseInt(prompt("Ingrese un número"));

		if(numero == 9)
		{
			break;
		}

		alert("Usted ingresó el número " + numero)
	}



}//FIN DE LA FUNCIÓN