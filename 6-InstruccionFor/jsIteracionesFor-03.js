function mostrar()
{
	//Pido la cantidad de repeticiones y la almaceno en una variable
	let repeticiones = parseInt(prompt("ingrese el número de repeticiones"));
	
	//Mientras i valga menos que la cantidad de repeticiones, seguir mostrando el mensaje
	for(let i = 1; i <= repeticiones; i++)
	{
		document.write("Hola UTN FRA </br>");
	}

}//FIN DE LA FUNCIÓN