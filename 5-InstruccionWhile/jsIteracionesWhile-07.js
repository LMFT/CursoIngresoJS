/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	//Declaro las variables e inicializo respuesta para forzar entrada al bucle
	let contador = 0;
	let numero;
	let suma = 0;
	let promedio;
	let respuesta = 's';

	// Mientras el usuario quiera seguir ingresando números se mantiene el bucle activo
	while(respuesta == 's')
	{
		//Tomo el numero del usuario y calculo la suma
		numero = parseFloat(prompt("Ingrese un numero"));
		suma = suma + numero;

		//Aumento el contador en 1
		contador++;

		//Pregunto por prompt al usuario si quiere ingresar otro numero
		respuesta = prompt("Desea ingresar otro numero? Ingrese *si* para respuesta afirmativa");
	}
	//Caluclo el promedio
	promedio = suma / contador;

	//Muestro los resultados en pantalla
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN