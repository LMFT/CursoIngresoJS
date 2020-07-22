function mostrar()
{
	let contador = 0;
	let numero;
	let suma = 0;
	let promedio;

	while(contador < 5)
	{
		numero = parseFloat(prompt("Ingrese un numero"));
		suma = suma + numero;
		contador=contador+1;
	}

	promedio = suma / contador;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN