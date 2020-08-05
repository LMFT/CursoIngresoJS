/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
	//Ingreso e inicializo las variables
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	let nombre=document.getElementById("txtIdNombre").value;

	//Muestro las variables concatenadas con un "+" dentro del mismo alert
	alert("Su nombre es "+nombre +"y su edad es "+edad);
}

