function mostrar()
{
	//Declaro las variables
	let edad = document.getElementById("txtIdEdad").value;

	//Convierto la edad en una variable numerica
	edad=parseInt(edad);
	
	//Secuencia lógica: Si la variable no adolescente es true, muestra por alert el mensaje "No es adolescente"
	if(!(edad>=13 && edad<=17))
	{
		alert("No es adolescente");
	}
}