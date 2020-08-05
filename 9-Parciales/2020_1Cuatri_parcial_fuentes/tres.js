/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y 
estado civil("soltero", "casado" o "viudo")y temperatura corporal.

a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let temperatura;
	let estadoCivil;
	let contadorViudos = 0;
	let nombreMasTemperatura;
	let masTemperatura;
	let contadorTerceraEdad = 0;
	let contadorSolterosViudos = 0;
	let respuesta;
	let flag = 0;
	let promedio;
	let cantidadSolteros = 0;
	let edadSolteros = 0;
	
	do
	{
	
	nombre = prompt("Ingrese su nombre");
	edad = parseInt(prompt("Ingrese su edad"));

	while (edad<0 || isNaN(edad) || edad > 100)
	{
		edad = parseInt(prompt("Error: La edad ingresada no es válida. Reingrese su edad"));
	}

	sexo = prompt("Ingrese su sexo (f o m)").toLowerCase();
	
	while(sexo != "f" && sexo !="m")
	{
		sexo = prompt("Error: El sexo ingresado no es válido. Reingrese su sexo (f o m)").toLowerCase();
	}

	estadoCivil = prompt("Ingrese su estado civil (soltero, casado o viudo)").toLowerCase();
	
	while(estadoCivil !="soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
	{
		estadoCivil = prompt("Error: El estado civil ingresado no es válido- Reingrese su estado civil (soltero, casado o viudo").toLowerCase();

	}
	temperatura = parseFloat(prompt("Ingrese su temperatura corporal"));
	
	while(temperatura < 0 || isNaN(temperatura))
	{
		temperatura = parseFloat(prompt("Error: La temperatura ingresada no es válida. Reingrese su temperatura corporal"));
		
	}

	if (temperatura > masTemperatura || flag == 0)
	{
		masTemperatura = temperatura;
		nombreMasTemperatura = nombre;
	}

	if(edad >= 18 && estadoCivil == "viudo")
	{
		contadorViudos++;
	}

	if(sexo == 'm' && (estadoCivil == "soltero" || estadoCivil == viudo))
	{
		contadorSolterosViudos++;
	}

	if (edad > 60 && temperatura > 38)
	{
		contadorTerceraEdad++;
	}

	if (sexo == 'm' && estadoCivil == "soltero")
	{
		cantidadSolteros++;
		edadSolteros+=edad
	}
	respuesta = prompt("Desea ingresar otro pasajero?");
}while(respuesta == 's')

promedio = (edadSolteros /cantidadSolteros).toFixed(2);

console.log("La persona con mas temperatura es " + nombreMasTemperatura + " y tiene " + masTemperatura + "º de temperatura")
console.log("Hay un total de " + contadorViudos + " viudos");
console.log("Hay un total de " + contadorSolterosViudos + "hombres solteros o viudos");
console.log("Hay " + contadorTerceraEdad + " personas de las tercera edad con mas de 38º de temperatura");
console.log("El promedio de edad de los hombres solteros es de" + promedio);

}
