function mostrar()
{
	//Declaro la variable
	let edad;
	let estadoCivil;
	
	//Inicializo las variables y las convierto a numero / boolean
	edad=document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	estadoCivil = document.getElementById("estadoCivil").value;
	
	//Secuencia lógica: Si la edad es menor a 18 y el estado civil es distinto de soltero muestra por alert el mensaje 
	if(edad<18 && estadoCivil!="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}


	


}//FIN DE LA FUNCIÓN