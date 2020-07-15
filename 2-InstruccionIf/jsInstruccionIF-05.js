function mostrar()
{
	//Declaro las variables
	let edad = document.getElementById("txtIdEdad").value;
	let no_adolescente;

	//Convierto la edad en una variable numerica
	edad=parseInt(edad);

	/*Convierto la variable no_adolescente en variable boolean 
	(es verdadera si la edad es menor o igual a 13 o mayor o igual a 17)*/
	
	no_adolescente = edad >= 17 || edad <=13;
	
	//Secuencia lógica: Si la variable no adolescente es true, muestra por alert el mensaje "No es adolescente"
	if(no_adolescente)
	{
		alert("No es adolescente");
	}
}