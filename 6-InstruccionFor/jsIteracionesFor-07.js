function mostrar()
{
	//Declaro las variables
	let numero;
	let cantidad = 0;

	//Pido el numero
	numero = parseInt(prompt("Ingrese un número"));
	//Analizo el numero ingresado (mayor o menor a 1) y creo el bucle (for) correspondiente a ese numero
	if(numero <1)
	{
		for(let i=1; i >= numero; i--)
		{
			if(numero % i == 0)
			{
				cantidad++;
				document.write(cantidad + "º divisor: " + i + "</br>");
			}
		}
	}
	else
	{
		for(let i=1; i <= numero; i++)
		{
			if(numero % i == 0)
			{
				cantidad++;
				document.write(cantidad + "º divisor: " + i + "</br>");
			}
		}
	}
	document.write("Cantidad de divisores: " + cantidad);
	//Calculo si el numero actual es divisor (el resto da 0)

	//Si es divisor lo cuento y lo muestro

}//FIN DE LA FUNCIÓN