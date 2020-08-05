function mostrar()
{
	//Inicio el bucle for
	for(let i = 10; i>=1; i--)
	{
		//Muestro cuantas repeticiones falta para que termino el bucle
		alert("Quedan " + i + " repeticiones");

		if(i == 5)
		{
			alert("Break!");
			break;
		}
	}
}