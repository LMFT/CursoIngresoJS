/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	sexo = prompt("Ingrese su sexo (F = Femenino; M = Masculino)");
	
	while(sexo != "m" && sexo != "f" && sexo != "M" && sexo != "F")
	{
		alert("El sexo ingresado es inválido");
		sexo = prompt("Ingrese su sexo (F = Femenino; M = Masculino");
	}

	document.getElementById("txtIdSexo").value = sexo;

}//FIN DE LA FUNCIÓN