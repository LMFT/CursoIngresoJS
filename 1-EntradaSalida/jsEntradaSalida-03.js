/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//Declaro la variable
	let nombre;

	//Asigno valor a la variable a traves de ID
	nombre=document.getElementById("txtIdNombre").value;
	
	//Muestro el nombre
	alert("El nombre ingresado es: " +nombre);

}


