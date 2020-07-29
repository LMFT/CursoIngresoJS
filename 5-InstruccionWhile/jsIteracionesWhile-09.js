/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	//Declaro las variables y fuerzo la respuesta para entrar al while
	let numero;
	let respuesta = 's';
	let maximo = -Infinity;
	let minimo = Infinity;

	//Mientras el usuario quiera ingresar un numero se mantiene el bucle
	while (respuesta == 's')
	{
		//Le pido un numero al usuario
		numero = parseFloat(prompt("Ingrese un numero"));
		
	/* Para este ejercicio utilizo dos IF separados, para solucionar los problemas que ocasiona usar un solo dato
	o usar una secuencia ascendente / descendente, dependiendo del primer bloque de codigo*/

		//Si el numero es menor que el minimo lo almaceno en la variable 
		if (numero < minimo)
		{
			minimo = numero;
		}
		//Si el numero es mayor que el maximo lo almaceno en la variable
		if (numero >= maximo)
		{
			maximo = numero;
		}
		//Le pregunto al usuario si quiere ingresar otro numero
		respuesta = prompt("Si desea ingresar otro numero tipee si")
	}

	//Muestro los datos
	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;

}//FIN DE LA FUNCIÓN