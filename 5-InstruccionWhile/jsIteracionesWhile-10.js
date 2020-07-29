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
	let respuesta = 's';
	let numero;
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let cantidadPositivos = 0;
	let cantidadNegativos = 0;
	let cantidadCeros = 0;
	let cantidadPares = 0;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;

	//El bucle se mantiene mientras el usuario quiera cargar datos
	while(respuesta=='s')
	{
		//Pido el numero al usuario
		numero = parseFloat(prompt("Ingrese un número"));

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

		//Si el resto del numero dividido 2 es 0 el numero es par
		if ((numero % 2) == 0)
		{
			cantidadPares++;
		}

		//Pregunto al usuario si quiere ingresar mas numeros
		respuesta=prompt("Desea ingresar otro numero?");
	}

	//Calculo los promedios
	promedioPositivos = sumaPositivos / cantidadPositivos;
	promedioNegativos = sumaNegativos / cantidadNegativos;
	//Calculo la diferencia
	diferencia = sumaNegativos + sumaPositivos;

	//Muestro por Document los resultados
	//document.write("la suma de negativos es :"+sumaNegativos+ " /// La suma de positivos es: "+ sumaPositivos + " /// La cantidad de positivos es: " + cantidadPositivos + " /// La cantidad de negativos es: " + cantidadNegativos + " /// La cantidad de ceros es: " + cantidadCeros + " /// La cantidad de números pares es: " + cantidadPares + " /// El promedio de los positivos es: " + promedioPositivos + " /// El promedio de negaivos es: " + promedioNegativos + " /// La diferencia es: " + diferencia);
	console.log("La suma de negativos es: " + sumaNegativos);
	console.log("La suma de positivos es: " + sumaPositivos);
	console.log("La cantidad de positivos es: " + cantidadPositivos);
	console.log("La cantidad de negativos es: " + cantidadNegativos);
	console.log("La cantidad de ceros es: " + cantidadCeros);
	console.log("La cantidad de numeros pares es: " + cantidadPares);
	console.log("El promedio de positivos es: " + promedioPositivos);
	console.log("El promedio de negativos es: " + promedioNegativos);
	console.log("La diferencia es: " + diferencia);
}//FIN DE LA FUNCIÓN