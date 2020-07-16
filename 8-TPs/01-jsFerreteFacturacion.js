/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //Declaro las variables
    let prod1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let prod2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let prod3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    let suma;

    //Calculo la suma
    suma = prod1+prod2+prod3;
    suma = suma.toFixed(2);
    
    //Muestro el resultado por alert
    alert("La suma de los precios es $"+suma);
    
}
function Promedio () 
{
    //Declaro las variables
    let prod1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let prod2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let prod3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    let promedio;
    
    //Calculo el promedio
    promedio = (prod1+prod2+prod3) / 3;
    promedio = promedio.toFixed(2);

    //Muestro el promedio por alert
    alert("El promedio de los productos es $" +promedio);
}
function PrecioFinal () 
{
     //Declaro las variables
     let prod1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
     let prod2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
     let prod3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
     let suma;
     let iva;
     let precioFinal;

     //Calculo el valor del precio final (suma de productos, calculo de IVA y suma total)
     suma = (prod1+prod2+prod3)
     iva = suma * 21 / 100;
     precioFinal = suma + iva;
     precioFinal = precioFinal.toFixed(2)

     //Muestro el precio final por alert
     alert("El precio final es $"+precioFinal);
     


	
}