/*A una pareja se le pide los datos para mostrar un mensaje 
"ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".*/

function mostrar()
{
    let persona1;
    let persona2;
    let peso1;
    let peso2;
    let suma;
    let promedio;

    persona1 = prompt("Ingrese su nombre");
    persona2 = prompt("Ingrese el nombre de su pareja");
    peso1 = parseFloat(prompt("Ingrese su peso"));
    while(!(peso1 > 0))
    {
        peso1 = parseFloat(prompt("El peso ingresado no es válido. Ingrese su peso"));
    }
    peso2 = parseFloat(prompt("Ingrese el peso de su pareja"));
    while(!(peso2 > 0))
    {
        peso2 = parseFloat(prompt("El peso ingresado no es válido. Ingrese su peso"));
    }
    suma = peso1 + peso2;
    promedio = suma / 2;

    alert("ustedes se llaman " +  persona2 + " y " + persona1 +  ", pesan " + peso1 + " y " + peso2 + " kilos, que sumados son " + suma + " kilos y el promedio de peso es " + promedio)
  
}
