/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	//Declaro la variable y pido su sexo al usuario
	let sexo;

	sexo = prompt("Ingrese su sexo").toLowerCase;
	
	//Mientras el sexo ingresado sea invalido, muestro un mensaje de error por alert y vuelvo a pedir el dato
	while(sexo != "m" && sexo != "f")
	{
		sexo = prompt("Sexo inválido. Reingrese su sexo").toLowerCase;
	}

	document.getElementById("txtIdSexo").value = sexo;

}//FIN DE LA FUNCIÓN