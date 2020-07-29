function mostrar()
{
	let estacion = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;
	const ESTADIA = parseFloat(15000);
	let precio;

	//Creo un switch por cada lugar
	switch(destino)
	{
	
		case "Bariloche":
		
			//Calculo precio segun estacion
			if(estacion == "Invierno")
			{
				precio =parseFloat(ESTADIA * 1.2);
			}
			else if(estacion == "Verano")
			{
				precio = parseFloat(ESTADIA * 0.8);
			}
			else
			{
				precio = parseFloat(ESTADIA * 1.1);
			}
			
			break;
		
		case "Cataratas":
			
			//Calculo precio segun estacion
			if(estacion == "Invierno")
			{
				precio =parseFloat(ESTADIA * 0.9);
			}
			else if(estacion == "Verano")
			{
				precio = parseFloat(ESTADIA * 1.1);
			}
			else
			{
				precio = parseFloat(ESTADIA * 1.1);
			}
			
			break;

		case "Mar del plata":

			//Calculo precio segun estacion
			if(estacion == "Invierno")
			{
				precio =parseFloat(ESTADIA * 0.8);
			}
			else if(estacion == "Verano")
			{
				precio = parseFloat(ESTADIA * 1.2);
			}
			else
			{
				precio = parseFloat(ESTADIA * 1.1);
			}
			
			break;

		case "Cordoba":

			//Calculo precio segun estacion

			if(estacion == "Invierno")
			{
				precio =parseFloat(ESTADIA * 0.9);
			}
			else if(estacion == "Verano")
			{
				precio = parseFloat(ESTADIA * 1.1);
			}
			else
			{
				precio = parseFloat(ESTADIA);
			}
			
			break;
	}

	alert("El precio final es de $"+precio);

}//FIN DE LA FUNCIÓN