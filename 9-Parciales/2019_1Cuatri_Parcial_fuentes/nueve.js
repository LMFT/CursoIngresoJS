/*Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones entre 1 y 7000 
(validar) la temperaruta mínima que se registra en su territorio(entre -50 y 50) hasta que el usuario quiera e informar 
al terminar el ingreso por document.write:

a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
*/

function mostrar()
{
    let cantidad;
    let cantidadMin;
    let pais;
    let paisMenosHabitantes;
    let paisMenosTemperatura;
    let promedio;
    let respuesta;
    let temperatura;
    let temperaturaMinima;

    let flagCantidad = 0;
    let flagTemperatura = 0;

    let contadorPares = 0;
    let contadorTemperatura40 = 0;
    let contadorPaises = 0;

    let acumuladorHabitantes = 0;

    do
    {
        pais = prompt("Ingrese el pais").toLowerCase();
        
        contadorPaises++;
        
        cantidad = parseFloat(prompt("Ingrese la cantidad de habitantes en millones (entre 1 y 7000)"));

    while(!(cantidad >= 1 && cantidad <=7000))
    {
        cantidad = parseFloat(prompt("Cantidad invalida. Ingrese la cantidad de habitantes en millones (entre 1 y 7000)"));
    }
    acumuladorHabitantes += cantidad

    temperatura = parseFloat(prompt("Ingrese la temperatura mínima registrada en el país (entre -50 y 50)"));

    while(!(temperatura <=50 && temperatura >= -50))
    {
        temperatura = parseFloat(prompt("Temperatura inválidaIngrese la temperatura mínima registrada en el país (entre -50 y 50)"));
    }

    
    //a) La cantidad de temperaturas pares.
    if(temperatura % 2 == 0)
    {
        contadorPares++;
    }
    //El nombre del pais con menos habitantes
    if(cantidadMin > cantidad || flagCantidad == 0)
    {
        flagCantidad = 1;
        cantidadMin = cantidad;
        paisMenosHabitantes = pais;
    }
    
    if(temperatura > 40)
    {
        contadorTemperatura40++;
    }
    
    if(temperaturaMinima > temperatura || flagTemperatura == 0)
    {
        temperaturaMinima = temperatura;
        paisMenosTemperatura = pais;
        flagTemperatura = 1;
    }
    
    respuesta = prompt("Quiere ingresar otro país?").toLowerCase();
    }while(respuesta == 's')

    promedio = acumuladorHabitantes / contadorPaises;

    document.write("La cantidad de temperaturas pares es: " + contadorPares + "</br>");
    document.write("El pais con menos habitantes es: " + paisMenosHabitantes + " con una cantidad de " + cantidadMin + "</br>");
    document.write("La cantidad de paises que superan los 40 grados es de: " + contadorTemperatura40 + "</br>");
    document.write("El promedio de habitantes es de de: " + promedio + "</br>");
    document.write("La menor temperatura corresponde a: " + paisMenosTemperatura + " con una temperatura de " + temperaturaMinima + "</br>");
    
}

/*a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.*/