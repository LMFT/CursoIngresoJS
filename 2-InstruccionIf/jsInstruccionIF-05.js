function mostrar()
{
	var edad = document.getElementById("txtIdEdad").value;

	edad=parseInt(edad);

	edad <= 17 || edad >=13

	if(edad)
	{
		alert("No es adolescente");
	}
}