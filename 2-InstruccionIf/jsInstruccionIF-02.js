function mostrar()
{
	//Tomo la edad y la convierto a numero
	var edad=document.getElementById("txtIdEdad").value;
	
	edad=parseInt(edad);

	//Secuencia lógica: Si la edad es mayor o igual a 18, devuelve el mensaje por alert
	if(edad>=18)
	{
		alert("Es mayor de edad");
	}
	
}