function mostrar()
{
	//tomo el mes
	var mes = document.getElementById("txtIdMes").value;
	
	// Creo el switch y agrego los cuadros de texto
	switch (mes)
	{
	case "Enero":
			alert("Que comiences bien el año!");
			break;
	
	case "Marzo":
		alert("Arrancan las clases");
		break;

	case "Julio":
			alert("Se vienen las vacaciones!");
			break;

	case "Diciembre":
			alert("Felices fiestas!");
			break;

	}
}//FIN DE LA FUNCIÓN