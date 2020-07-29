function mostrar()
{
	let destino =document.getElementById("txtIdDestino").value;
	
	//Muestro la direccion correspondiente a cada lugar
	switch(destino)
	{
		case "Bariloche":
			alert("Oeste");
			break;

		case "Cataratas":
			alert("Norte");
			break;
			
		case "Mar del plata":
			alert("Este");
			break;
		
			case "Ushuaia":
			alert("Sur");
			break;
	}

}//FIN DE LA FUNCIÓN