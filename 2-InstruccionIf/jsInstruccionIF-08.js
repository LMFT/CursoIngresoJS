function mostrar()
{
	//Declaro las variables y las inicializo

	let edad = parseInt(document.getElementById("txtIdEdad").value);
	let estadoCivil = document.getElementById("estadoCivil").value;

	/*Sentencia lógica: Si la edad es mayor o igual a 18 y el estado es igual a soltero
	  muestra "Es mayor y esta soltero" por alert*/
	
	  if (edad>=18 && estadoCivil=="Soltero")
	{
		alert("Es mayor y esta soltero");
	}


}//FIN DE LA FUNCIÓN