/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave=prompt("Ingrese la clave");

	while(clave != "utn750")
	{
		alert("La clave ingresada es inválida")
		clave=prompt("Ingrese la clave")
	}
	
}//FIN DE LA FUNCIÓN
