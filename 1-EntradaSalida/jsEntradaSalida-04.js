/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreingresado;

	nombreingresado= prompt("Inserte un nombre");
	document.getElementById("txtIdNombre").value = nombreingresado
}

