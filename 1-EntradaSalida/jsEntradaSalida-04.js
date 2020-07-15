/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//Declato la variable
	let nombreingresado;

	//Pido el dato por prompt
	nombreingresado= prompt("Inserte un nombre");

	//Asigno el dato ingresado al cuadro de texto
	document.getElementById("txtIdNombre").value = nombreingresado
}

