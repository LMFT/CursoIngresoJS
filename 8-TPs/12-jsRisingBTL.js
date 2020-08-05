/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de 
datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego 
asignarla a cuadros de textos. 

12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

function ComenzarIngreso () 
{
	 // Declaro las variables
	 let edad;
	 let sexo;
	 let estadoCivil;
	 let sueldo;
	 let legajo;
	 let nacionalidad;
	 let estadoCivilString;
	 let sexoString;
	 let nacionalidadString;
	 // Solicito la edad (entre 18 y 90)
	edad = parseInt(prompt("Ingrese una edad entre 18 y 90 años inclusive"));
	// Valido el dato
	while(!(edad>=18 && edad <=90))
	{
	edad = parseInt(prompt("La edad ingresada no es válida. Por favor, reingrese su edad")); 
	}
	// Solicito el sexo (masculino o femenino)
	sexo = prompt("Ingrese su sexo (M para masculino y F para femenino");
	// Valido el dato
	while(sexo != "m" && sexo != "f" && sexo != "M" && sexo != "F")
	{
		sexo = prompt("El sexo ingresado es inválido. Por favor reingrese su sexo");
	}
	// Solicito el estado civil (1 soltero 2 casado 3 divorciado 4 viudo)
	estadoCivil = parseInt(prompt("Ingrese su estado civil. 1 para soltero, 2 para casado, 3 para divorciado, 4 para viudo"));
	// Valido el dato
	while(!(estadoCivil>=1 && estadoCivil <= 4))
	{
		estadoCivil = parseInt(prompt("El estado civil ingresado no es válido. Por favor, reingrese su estado civil"));
	}
	// Solicito el sueldo (mayor o igual a 8000)
	sueldo = parseInt(prompt("Ingrese su sueldo bruto (Al menos $8.000)")).toFixed(2);
	// Valido el dato
	while(sueldo<8000 || isNaN(sueldo))
	{
		sueldo = parseInt(prompt("El sueldo ingresado no es válido. Por favor reingrese su sueldo")).toFixed(2);
	}
	// Solicito el legajo (4 cifras sin ceros a la izquierda)
	legajo = parseInt(prompt("Ingrese su legajo (4 cifras sin ceros a la izquierda)"));
	// Valido el dato
	while(!(legajo>=1000 && legajo <10000))
	{
		legajo = parseInt(prompt("El legajo introducido no es válido, por favor, reingrese el legajo"));
	}
	// Solicito nacionalidad (A argentinos E extranjeros N nacionalizados)
	nacionalidad = prompt("Ingrese su nacionalidad: A para argentinos, E para extranjeros o N para nacionalizados");
	// Valido el dato
	while(nacionalidad != "n" && nacionalidad != "N" && nacionalidad != "e" && nacionalidad != "E" && nacionalidad != "a" && nacionalidad != "A")
	{
		nacionalidad = prompt("La nacionalidad ingresada no es válida. Por favor, reingrese su nacionalidad");
	}
	
	//Estructura para mejor legibilidad de los datos
	
	if(sexo == "m" || sexo == "M")
	{
		sexoString = "Masculino";
	}
	else
	{
		sexoString = "Femenino"	;
	}
	
	switch (estadoCivil)
	{
		case 1:
			estadoCivilString = "Soltero"
			break;
		case 2:
			estadoCivilString = "Casado";
			break;
		case 3:
			estadoCivilString = "Divorciado";
			break;
		case 4:
			estadoCivilString = "Viudo";
	}

	switch(nacionalidad)
	{
		case "a":
		case "A":
			nacionalidadString = "Argentino";
			break;
		case "e":
		case "E":
			nacionalidadString = "Extranjero";
			break;
		case "n":
		case "N":
			nacionalidadString = "Nacionalizado";
	}
	document.getElementById("txtIdEdad").value = "Edad: " + edad;
	document.getElementById("txtIdSexo").value = "Sexo: " + sexoString;
	document.getElementById("txtIdEstadoCivil").value = "Estado civil: " + estadoCivilString;
	document.getElementById("txtIdSueldo").value = "Sueldo bruto: $" + sueldo;
	document.getElementById("txtIdLegajo").value = "Legajo Nº: " +legajo;
	document.getElementById("txtIdNacionalidad").value = "Nacionalidad: " + nacionalidadString;
}