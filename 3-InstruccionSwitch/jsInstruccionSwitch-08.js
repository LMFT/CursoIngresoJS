function mostrar()
{
	let destino =document.getElementById("txtIdDestino").value;
	
	switch(destino)
	{
		case "Bariloche":
		case "Mar del plata":
			alert("Hace Frio");
			break;
		
		case "Cataratas":
		case "Cordoba":
			alert("Hace Calor");
			break;
	}

}//FIN DE LA FUNCIÓN