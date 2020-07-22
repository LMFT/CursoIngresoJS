function mostrar()
{
	let estacion = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;
	const ESTADIA = parseFloat(15000);
	let precio;

	switch(destino)
	{
	
		case "Bariloche":
		
			if(estacion == "Invierno")
			{
				precio =parseFloat(ESTADIA * 1.2);
				alert("El precio final es de $"+precio);
			}
			else if(estacion == "Verano")
			{
				precio = parseFloat(ESTADIA * 0.8);
				alert("El precio final es de $"+precio);
			}
			else
			{
				precio = parseFloat(ESTADIA * 1.1);
				alert("El precio final es de $"+precio);
			}
			
			break;
		
		case "Cataratas":
	
			if(estacion == "Invierno")
			{
				precio =parseFloat(ESTADIA * 0.9);
				alert("El precio final es de $"+precio);
			}
			else if(estacion == "Verano")
			{
				precio = parseFloat(ESTADIA * 1.1);
				alert("El precio final es de $"+precio);
			}
			else
			{
				precio = parseFloat(ESTADIA * 1.1);
				alert("El precio final es de $"+precio);
			}
			
			break;

		case "Mar del plata":

			if(estacion == "Invierno")
			{
				precio =parseFloat(ESTADIA * 0.8);
				alert("El precio final es de $"+precio);
			}
			else if(estacion == "Verano")
			{
				precio = parseFloat(ESTADIA * 1.2);
				alert("El precio final es de $"+precio);
			}
			else
			{
				precio = parseFloat(ESTADIA * 1.1);
				alert("El precio final es de $"+precio);
			}
			
			break;

		case "Cordoba":
			if(estacion == "Invierno")
			{
				precio =parseFloat(ESTADIA * 0.9);
				alert("El precio final es de $"+precio);
			}
			else if(estacion == "Verano")
			{
				precio = parseFloat(ESTADIA * 1.1);
				alert("El precio final es de $"+precio);
			}
			else
			{
				precio = parseFloat(ESTADIA);
				alert("El precio final es de $"+precio);
			}
			
			break;
	}
}//FIN DE LA FUNCIÓN