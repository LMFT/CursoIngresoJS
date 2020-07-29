function mostrar()
{
	//tomo el mes
	let mes = document.getElementById("txtIdMes").value;
	

	//Agrupo y muestro mensajes correspondientes
	switch (mes)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno");
			break;

		case "Julio":
		case "Agosto":
			alert("Abrigate que hace Frio");
			break;

		case "Septiempre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		{
			alert("Ya pasamos el frio, ahora calor!");
			break;
		}

	}




}//FIN DE LA FUNCIÓN