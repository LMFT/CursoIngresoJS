/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	//Declaro la variable
	let clave=prompt("Ingrese la clave");

	//Creo el bucle y lo asigno a clave distinta de la contraseña correcta
	while(clave != "utn750")
	{
		//Mientras la contraseña sea incorrecta muestro un alert y vuelvo a pedir la clave
		clave=prompt("La clave invgresada es incorrecta. Ingrese la clave nuevamente");
	}
	alert("Bienvenido");
	
}//FIN DE LA FUNCIÓN
