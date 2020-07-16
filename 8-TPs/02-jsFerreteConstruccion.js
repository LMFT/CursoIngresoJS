/*2.	Para el departamento de Construcción:

    A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y 
     se debe alambra con tres hilos de alambre.

    B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y 
    se debe alambra con tres hilos de alambre.

    C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar 
    cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

/*
"txtIdLargo"
"txtIdAncho"
"txtIdRadio"
*/

function Rectangulo () 
{
    //Declaro las variables
    let ancho = parseFloat(document.getElementById("txtIdLargo").value);
    let largo = parseFloat(document.getElementById("txtIdAncho").value);
    let perimetro;
    let alambre;

    //Calculo el perimetro del terreno rectangular
    perimetro = (ancho+largo)*2;

    //Calculo la cantidad de alambre necesaria (3 alambres del tamaño del perimetro)
    alambre = perimetro * 3;

    alambre = alambre.toFixed(2);

    //Muestro la cantidad de alambre por alert
    alert("La cantidad de alambre necesaria es de "+alambre +" metros");

}
function Circulo () 
{
    //Declaro las variables
    let radio = parseFloat(document.getElementById("txtIdRadio").value);
    let perimetro;
    let alambre;

    //Calculo el perimetro del terreno circular
    perimetro = 2 * Math.PI * radio;
    
    //Calculo la cantidad de alambre (3 alambres del largo del perimetro)
    alambre = perimetro * 3;

    alambre = alambre.toFixed(2);

    //Muestro la cantidad de alambre por alert
    alert("La cantidad de alambre necesaria es de "+alambre+" metros");
}
function Materiales () 
{
    //Declaro las variables
    let ancho = parseFloat(document.getElementById("txtIdAncho").value);
    let largo = parseFloat(document.getElementById("txtIdLargo").value);
    let area;
    let cemento;
    let cal; 

    /*Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar 
    cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.*/

    //Calculo el area del terreno
    area = ancho * largo;

    //Calculo la cantidad de bolsas de cemento (2 por metro cuadrado)
    cemento = area * 2;

    //Calculo la cantidad de bolsas de cal (3 por metro cuadrado)
    cal = area * 3;

    //Muestro por alert la cantidad de bolsas de cemento y cal
    alert("Para las medidas ingresadas necesita "+cemento+" bolsas de cemento y "+cal+" bolsas de cal")
	
}