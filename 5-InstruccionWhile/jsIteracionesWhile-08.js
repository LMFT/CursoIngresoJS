/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//Declaro las variables e inicializo la resuesta para forzar la entrada al bucle
	let respuesta;
	let suma = 0;
	let producto = 1;
	let numero;
	let flag = 0;
	
	//Mientras el usuario quiera ingresar otra respuesta se mantiene el bucle
	do
	{
		//Pido el numero al usuario
		numero = parseFloat(prompt("Ingrese un numero"));
		
		while(isNaN(numero))
		{
			numero = parseFloat(prompt("Caracter incorrecto, por favor ingrese un número"))
		}
		//Analizo el valor del numero y hago la operacion correspondiente
		//Si existe un numero negativo ingresado levanto un flag
		if (numero >= 0)
		{
			suma += numero;
		}
		else
		{
			producto*=numero;
			flag = 1;
		}

		//Pregunto al usuario si desea ingresar otro numero
		respuesta = prompt("Si desea ingresar otro numero ingrese si");
	}while(respuesta == 's');
	
	//Si el usuario no ingresó negativos el producto vale 0
	if (flag == 0)
	{
		producto = 0;
	}

	//Muestro los resultados por pantalla
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdProducto").value = producto;
	
}//FIN DE LA FUNCIÓN