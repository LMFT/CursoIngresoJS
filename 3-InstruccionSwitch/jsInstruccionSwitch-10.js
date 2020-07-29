function mostrar()
{
	let estacion = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;

	//Creo un case por cada destino
	switch(destino)
	{
		//Muestro en que estaciones se viaja
		case "Bariloche":
		
			if(estacion == "Invierno" || estacion == "Otoño")
			{
				alert("Se viaja");
			}
			else
			{
				alert("No se viaja");
			}
			break;
		
			//Muestro en que estaciones se viaja
		case "Cataratas":
		
			if(estacion == "Invierno")
			{
				alert("No se viaja");
			}
			else
			{
				alert("Se viaja");
			}
			break;
		
			//Muestro en que estaciones se viaja
		case "Mar del plata":
		
			if(estacion == "Invierno")
			{
				alert("No se viaja");
			}
			else
			{
				alert("Se viaja");
			}
			
			break;
		
			//Muestro en que estaciones se viaja
		case "Cordoba":
		
			if(estacion == "Invierno" || estacion == "Verano")
			{
				alert("No se viaja");
			}
			else
			{
				alert("Se viaja");
			}
			break;
		
	}

}//FIN DE LA FUNCIÓN