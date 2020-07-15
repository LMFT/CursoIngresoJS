function mostrar()
{
	//Tomo la edad y la convierto a numero  	
	var edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	//Inicio la secuencia lógica
	//Si la edad es igual a 15, el programa muestra el mensaje por alert
	if (edad==15)
	{ 
		alert("Niña Bonita");
	}
}