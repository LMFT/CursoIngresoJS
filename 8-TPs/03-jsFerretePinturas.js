/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() 
{
    //Declaro las variables
    let tempf = parseFloat(document.getElementById("txtIdTemperatura").value);
    let tempc;

    //Realizo el cálculo de conversion
    tempc = (tempf - 32) * 5 / 9;

    tempc = tempc.toFixed(2);

    //Muestro el resultado por alert
    alert(tempf + "º Farenheit equivale a " + tempc+"º Celsius");

}

function CentigradosFahrenheit() 
{
    //Declaro las variables
    let tempc = parseFloat(document.getElementById("txtIdTemperatura").value);
    let tempf;

    //Realizco el cálculo de conversion
    tempf = tempc * 9 / 5 + 32 ;

    tempf = tempf.toFixed(2);

    //Muestro el resultado de la conversion por pantalla
    alert(tempc + "º Celsius equivale a " + tempf+"º Farenheit");
}
