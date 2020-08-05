/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	//Declaro las variables y fuerzo la respuesta para entrar al while
	let numero;
	let respuesta;
	let max;
	let min;
	let flag = 0;

	do
	{
		//Le pido el dato al usuario
		numero = parseFloat(prompt("Ingrese un número"));

		while(isNaN(numero))
		{
			numero = parseFloat(prompt("El caracter ingresado no es un número. Reingrese un número"))
		}

		//Analizo si es el primer numero
		if (flag == 0)
		{
			max = numero;
			min = numero;
			flag = 1;
		}

		//Analizo si el numero ingresado es un nuevo max o min
		if (numero > max)
		{
			max = numero;
		}
		else if(numero < min)
		{
			min = numero;
		}

		//Pregunto al usuario si quiere ingresaro otro numero

		respuesta = prompt("Desea ingresar otro numero?");

	}while(respuesta == 's');

	//Muestro max y min al usuario

	document.getElementById("txtIdMaximo").value = max + "(Máximo)";
	document.getElementById("txtIdMinimo").value = min + "(Mínimo)";

}//FIN DE LA FUNCIÓN