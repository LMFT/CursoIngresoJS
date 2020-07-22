function mostrar()
{
	let estacion = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
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