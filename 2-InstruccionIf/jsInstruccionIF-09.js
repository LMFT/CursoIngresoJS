function mostrar()
{
	//Genero un numero aleatorio con la funcion Math.random() y lo multiplico por 11
	var aleatorio = Math.random()*11;

	//Transformo el numero aleatorio a numero entero (es flotante por defecto)
	aleatorio = parseInt(aleatorio);

	//Muestro el numero por alert
	alert("Su numero es "+aleatorio);	

}//FIN DE LA FUNCIÓN