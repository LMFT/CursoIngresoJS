/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
	var edadIngresada = document.getElementById("txtIdEdad").value;
	var nombreIngresado=document.getElementById("txtIdNombre").value;

	alert("Su nombre es "+nombreIngresado +"y su edad es "+edadIngresada);
}

