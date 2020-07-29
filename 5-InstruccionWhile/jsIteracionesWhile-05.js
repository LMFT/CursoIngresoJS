/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	//Declaro la variable y pido su sexo al usuario
	let sexo;

	sexo = prompt("Ingrese su sexo (F = Femenino; M = Masculino)");
	
	//Mientras el sexo ingresado sea invalido, muestro un mensaje de error por alert y vuelvo a pedir el dato
	while(sexo != "m" && sexo != "f" && sexo != "M" && sexo != "F")
	{
		alert("El sexo ingresado es inválido");
		sexo = prompt("Ingrese su sexo (F = Femenino; M = Masculino");
	}

	document.getElementById("txtIdSexo").value = sexo;

}//FIN DE LA FUNCIÓN