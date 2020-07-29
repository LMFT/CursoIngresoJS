function mostrar()
{
	//Declaro variables
	let i = 0;
	let numero;
	let suma = 0;
	let promedio;

	
	//Creo el bucle para contar los numeros del usuario
	while(i < 5)
	{
		//A medida que el usuario ingresa los numeros, los sumo y aumento el contador
		numero = parseFloat(prompt("Ingrese un numero"));
		suma += numero;
		i++;
	}
//Calculo el promedio
	promedio = suma / i;

	//Muestro la suma y el promedio en pantalla
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;



	//Sin usar while, comentar despues de clases
	/*numero = parseFloat(prompt("Ingrese un número"));
	suma+=numero;

	numero = parseFloat(prompt("Ingrese un número"));
	suma+=numero;

	numero = parseFloat(prompt("Ingrese un número"));
	suma+=numero;

	numero = parseFloat(prompt("Ingrese un número"));
	suma+=numero;

	numero = parseFloat(prompt("Ingrese un número"));
	suma+=numero;

	promedio = suma/5;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;*/


}//FIN DE LA FUNCIÓN