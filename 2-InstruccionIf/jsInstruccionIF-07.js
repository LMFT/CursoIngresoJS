function mostrar()
{
	//Declaro la variable
	let edad;
	let estado_civil;
	
	//Inicializo las variables y las convierto a numero / boolean
	edad=document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	estado_civil = document.getElementById("estadoCivil").value;
	
	//Secuencia lógica: Si la edad es menor a 18 y el estado civil es distinto de soltero muestra por alert el mensaje 
	if(edad<18 && estado_civil!="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}


	


}//FIN DE LA FUNCIÓN