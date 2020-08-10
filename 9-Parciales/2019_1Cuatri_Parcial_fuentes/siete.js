/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , 
el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.
Curso de ingreso UTN FRA*/
function mostrar()
{
    let altura;
    let sexo;
    let promedio;
    let alturaMasBaja;
    let sexoAlturaMasBaja;
    
    let cantidadMujeres = 0;

    let flag = 0;

    let acumuladorAltura = 0;

    for(let i = 0; i<5; i++)
    {
        altura = parseInt(prompt("Ingrese su altura (entre 0 y 250 cm)"));
        while(!(altura>0 && altura <=250))
        {
            altura = parseInt(prompt("La altura ingresada no es valida. Reingrese su altura (entre 0 y 250 cm)"));
        }
        sexo = prompt("Ingrese su sexo (f ó m)").toLowerCase();

        while(sexo != 'f' && sexo != 'm')
        {
            sexo = prompt("El sexo ingresado no es válido. Ingrese su sexo (f ó m)").toLowerCase();
        }
        acumuladorAltura += altura;

        if(sexo == 'f' && altura >190)
        {
            cantidadMujeres++;
        }

        if(alturaMasBaja > altura || flag == 0)
        {
            alturaMasBaja = altura;
            sexoAlturaMasBaja = sexo;
            flag = 1;
        }

    }
    promedio = acumuladorAltura / 5

    alert("El promedio de las alturas totales es de "+ promedio +
    "\n, la altura mas baja registrada es de " + alturaMasBaja + " y su sexo es " + sexoAlturaMasBaja + 
    "\n y la cantidad de mujeres que superan los 190 cm es de " + cantidadMujeres); 
}
