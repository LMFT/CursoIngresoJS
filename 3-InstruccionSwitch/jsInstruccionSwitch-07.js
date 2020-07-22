function mostrar()
{
	let destino =document.getElementById("txtIdDestino").value;
	
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
		
			case "Cordoba":
			alert("Sur");
			break;
	}

}//FIN DE LA FUNCIÓN