function mostrar()
{
	//Declaro las variables y tomo la edad y la convierto a numero
	let edad=document.getElementById("txtIdEdad").value;

	edad=parseInt(edad);

	/*Secuencia lógica: Si la edad es mayoro igual a 18, muestra por alert "Es mayor de edad".Si la edad es menor
	a 18 pero mayor o igual a 13, muestra por alert "Es adolescente". Sino, muestra por alert "Es un niño*/
	if(edad>=18)
	{
		alert("Es mayor de edad");
	}

	else if(edad>=13 && edad<=17)
	{
		alert("Es adolescente");
	}

	else
	{
		alert("Es un niño");
	}
}