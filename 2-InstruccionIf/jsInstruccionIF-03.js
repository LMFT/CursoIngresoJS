function mostrar()
{
	//Declaro las variables y las convierto a numero
	var edad=document.getElementById("txtIdEdad").value;
	
	edad=parseInt(edad);

	/*Secuencia lógica: Si la edad es igual o mayor a 18, muestra el mensaje "Es mayor de edad", 
	sino muestra "Es menor de edad"*/
	
	if(edad>=18)
	{
		alert("Es mayor de edad");
	}

	else
	{
		alert("Es menor de edad");
	}
}