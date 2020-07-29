function mostrar()
{
	let destino =document.getElementById("txtIdDestino").value;
	
	//Agrupo por case y muestro el mensaje correspondiente
	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("Hace Frio");
			break;
			
		case "Cataratas":
		case "Mar del plata":
			alert("Hace Calor");
			break;
	}

}//FIN DE LA FUNCIÓN