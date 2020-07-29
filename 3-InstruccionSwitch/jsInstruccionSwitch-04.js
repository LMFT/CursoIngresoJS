function mostrar()
{
	//tomo el mes
	let mes = document.getElementById("txtIdMes").value;
	
	//Agrupo los case y muestro los mensajes correspondientes
	switch (mes)
	{
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Septiembre":
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 31 dias");
			break;
		
		case "Febrero":
		alert("Este mes tiene 28 dias (29 en años biciestos)");
		break;



		default:
			alert("Este mes tiene 30 dias");

	}




}//FIN DE LA FUNCIÓN