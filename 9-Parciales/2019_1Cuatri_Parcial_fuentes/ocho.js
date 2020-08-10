/*Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso 
por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/
function mostrar()
{
    let letra;
    let letraMax;
    let letraMin;
    let numero;
    let numeroMax;
    let numeroMin;
    let promedioPositivos;
    let respuesta;

    let flag = 0;
    
    let contadorPares = 0;
    let contadorImpares = 0;
    let contadorCeros = 0;
    let contadorPositivos = 0;

    let sumaNegativos = 0;
    let sumaPositivos = 0;

    do
	{
		//Le pido el dato al usuario
		numero = parseFloat(prompt("Ingrese un número"));

		while(isNaN(numero))
		{
			numero = parseFloat(prompt("El caracter ingresado no es un número. Reingrese un número"));
		}
        letra = prompt("ingrese una letra");

		//Analizo si es el primer numero
		if (flag == 0)
		{
			numeroMax = numero;
			numeroMin = numero;
			flag = 1;
		}

		//Analizo si el numero ingresado es un nuevo max o min
		if (numero > numeroMax)
		{
            numeroMax = numero;
            letraMax = letra;
		}
		else if(numero < numeroMin)
		{
            numeroMin = numero;
            letraMin = letra;
        }
        
        //Cuento pares e impares

        if(numero % 2 == 0)
        {
            contadorPares++;
        }
        else
        {
            contadorImpares++;
        }

        if (numero == 0)
        {
            contadorCeros++;
        }
        else if(numero < 0)
        {
            sumaNegativos += numero;
        }
        else
        {
            contadorPositivos++;
            sumaPositivos += numero;
        }

		//Pregunto al usuario si quiere ingresaro otro numero

		respuesta = prompt("Desea ingresar otro numero?");

    }while(respuesta == 's');
    
    promedioPositivos = sumaPositivos / contadorPositivos;


	document.write("La cantidad de numeros pares es: " + contadorPares + "</br>");
	document.write("La cantidad de numeros impares es: " + contadorImpares + "</br>");
	document.write("La cantidad de ceros es: " + contadorCeros + "</br>");
	document.write("El promedio de positivos es: " + promedioPositivos + "</br>");
	document.write("La suma de negativos es: " + sumaNegativos + "</br>");
	document.write("El numero maximo es: " + numeroMax + " y su letra es " + letraMax + "</br>");
	document.write("El numero minimo es: " + numeroMin + "y su letra es " + letraMin + "</br>");
}

/*a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/
