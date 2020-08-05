/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//Declaro las variables y fuerzo la entrada al bucle
	let respuesta;
	let numero;
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let cantidadPositivos = 0;
	let cantidadNegativos = 0;
	let cantidadCeros = 0;
	let cantidadPares = 0;
	let promedioPositivos = 0;
	let promedioNegativos = 0;
	let diferencia;

	//El bucle se mantiene mientras el usuario quiera cargar datos
	do
	{
		//Pido el numero al usuario
		numero = parseFloat(prompt("Ingrese un número"));

		while(isNaN(numero))
		{
			numero = parseFloat(prompt("El numero ingresado no es un número. Reingrese un número"))
		}

		//Creo un condicional para analizar que valor toma el numero y ejecutar el codigo correspondiente
		//Si ya se inicializo la suma, se suma normalmente y se cuenta un positivo adicional
		if (numero > 0)
		{
			sumaPositivos+=numero;
			cantidadPositivos++;
		}
		//Si el numero es menor a acero y ya se inicializo la suma negativa, hago el calculo y cuento un negativo
		else if (numero < 0)
		{
			sumaNegativos+=numero;
			cantidadNegativos++;
		}
		//Si no es positivo ni negativo entonces es 0, cuento un 0
		else
		{
			cantidadCeros++;
		}

		//Si el resto del numero dividido por 2 es 0 el numero es par
		if (numero % 2 == 0 )
		{
			cantidadPares++;
		}

		//Pregunto al usuario si quiere ingresar mas numeros
		respuesta=prompt("Desea ingresar otro numero?");
	}while(respuesta == 's');

	//Calculo los promedios usando un condicional para restringir divisiones por 0
	if(cantidadPositivos != 0)
	{
		promedioPositivos = sumaPositivos / cantidadPositivos;
	}

	if(cantidadNegativos !=0)
	{
		promedioNegativos = sumaNegativos / cantidadNegativos;
	}

	//Calculo la diferencia
	diferencia = cantidadPositivos - cantidadNegativos;

	//Muestro por Document los resultados
	document.write("La suma de negativos es: " + sumaNegativos + "</br>");
	document.write("La suma de positivos es: " + sumaPositivos + "</br>");
	document.write("La cantidad de positivos es: " + cantidadPositivos + "</br>");
	document.write("La cantidad de negativos es: " + cantidadNegativos + "</br>");
	document.write("La cantidad de ceros es: " + cantidadCeros + "</br>");
	document.write("La cantidad de numeros pares es: " + cantidadPares + "</br>");
	document.write("El promedio de positivos es: " + promedioPositivos + "</br>");
	document.write("El promedio de negativos es: " + promedioNegativos + "</br>");
	document.write("La diferencia es: " + diferencia + "</br>");
}//FIN DE LA FUNCIÓN