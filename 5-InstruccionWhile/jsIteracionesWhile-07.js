/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador = 0;
	let numero;
	let suma = 0;
	let promedio;
	let otro = "si";

	while(otro == "si" || otro == "SI" || otro == "sI" || otro == "Si")
	{
		numero = parseFloat(prompt("Ingrese un numero"));
		suma = suma + numero;
		contador = contador+1;
		otro = prompt("Desea ingresar otro numero? Ingrese *si* para respuesta afirmativa");
	}
	
	promedio = suma / contador;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN