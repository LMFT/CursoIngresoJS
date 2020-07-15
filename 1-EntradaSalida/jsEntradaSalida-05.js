/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
	//Ingreso e inicializo las variables
	let edadIngresada = parseInt(document.getElementById("txtIdEdad").value);
	let nombreIngresado=document.getElementById("txtIdNombre").value;

	//Muestro las variables concatenadas con un "+" dentro del mismo alert
	alert("Su nombre es "+nombreIngresado +"y su edad es "+edadIngresada);
}

