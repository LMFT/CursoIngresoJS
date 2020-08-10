/*Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10"*/
function mostrar()
{
    let num1;
    let num2;
    let resta;
    let suma;

    num1 = parseFloat(prompt("Ingrese el primer número"))
    while(isNaN(num1))
    {
        num1 = parseFloat(prompt("El valor ingresado no es un número. Ingrese el primer número"));
    }
    num2 = parseFloat(prompt("Ingrese el segundo número"))
    while(isNaN(num2))
    {
        num2 = parseFloat(prompt("El valor ingresado no es un número. Ingrese el segundo número"));
    }

    if (num1 == num2)
    {
        alert(num1 + " " + num2);
    }
    else if(num1 > num2)
    {
        resta = num1 - num2;
        
        if(resta > 10)
        {
            alert("El resultado de la resta es " + resta + " y supero el valor de 10")
        }
        else
        {
            alert("el resultado de la resta es " + resta);
        }
    }
    else
    {
        suma = num1 + num2;

        alert("el resultado de la suma es " + suma)
    }

    
}


