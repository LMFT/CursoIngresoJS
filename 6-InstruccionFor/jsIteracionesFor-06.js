function mostrar()
{
	//Declarar variables
	let numero;
	let cantidadPares;

	//Pedir un número
	numero = parseInt(prompt("Ingrese un número"))
	//analizar el valor del numero ingresado (menor a 1)
	if(numero < 1)
	{
		for(let i=1; i >= numero; i--)
		{
			//si el numero es par, lo muestro y lo cuento
			if(i % 2 == 0)
			{
				cantidadPares++;
				document.write (i + "</br>");
			}
		}
	}
	//Si el numero es mayor uso otro bucle para numeros positivos
	else
	{
		for(let i=1; i <= numero; i++)
		{
			//si el numero es par, lo muestro y lo cuento
			if(i % 2 == 0)
			{
				cantidadPares++;
				document.write (i + "</br>");
			}
		}
	}
}//FIN DE LA FUNCIÓN