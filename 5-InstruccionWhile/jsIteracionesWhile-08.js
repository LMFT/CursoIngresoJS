/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//Declaro las variables e inicializo la resuesta para forzar la entrada al bucle
	let respuesta = 's';
	let suma;
	let producto;
	let numero;
	
	//Mientras el usuario quiera ingresar otra respuesta se mantiene el bucle
	while(respuesta == 's')
	{
		//Pido el numero al usuario
		numero = parseFloat(prompt("Ingrese un numero"));
		
		//Comparo el valor del numero y hago la operacion correspondiente. Si la suma se usa por primera vez la inicializo aca
		if (numero >=0 && suma == undefined)
		{
			suma = numero;
		}
		//Si ya se sumo, prosigo la suma aca
		else if (numero >= 0)
		{
			suma += numero
		}
		//Si el producto no esta definido y tengo que multiplicar, lo inicializo en 1 y hago la cuenta
		else if (producto == undefined && numero <0)
		{;
			producto=numero;
		}
		// Si el producto ya se hizo previamente hago la cuenta de forma normal
		else
		{
			producto *=numero;
		}

		respuesta = prompt("Si desea ingresar otro numero ingrese si");
	}
	
	//Si la suma no esta definida (nunca sumé) no muestro el valor de la suma
	if (suma == undefined)
	{
		document.getElementById("txtIdSuma").value = "";
	}
	// Si la suma esta definida muestro su valor
	else
	{
		document.getElementById("txtIdSuma").value = suma;
	}
	// Si el producto no está definido (nunca multipliqué) no muestro su valor
	if (producto == undefined)
	{
		document.getElementById("txtIdProducto").value = "";
	}

	//Si el producto está definido muestro su valor
	else
	{
		document.getElementById("txtIdProducto").value = producto;
	}
}//FIN DE LA FUNCIÓN