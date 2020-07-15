/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//Declaro las variaables
	let nombre;
	
	//Le pido el dato al usuario
	nombre = prompt("Inserte un nombre");

	//Muestro el nombre
	alert("El nombre ingresado es "+nombre);
}

