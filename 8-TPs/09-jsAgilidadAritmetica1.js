/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/


/*<input type="text" readonly id="txtIdPrimerNumero" placeholder="Primer número">
			<input type="text" readonly id="txtIdOperador"  placeholder="Operador matemático" >
			<input type="text" readonly id="txtIdSegundoNumero"  placeholder="Segundo número">
			<input type="text"  id="txtIdRespuesta"  placeholder="Tu respuesta">*/
let respuesta;
let correcta;
let operacion;
let num1;
let num2;
let flag = 0;

function comenzar()
{
    num1 = Math.round(Math.random() *(10-1)+1);
    num2 = Math.round(Math.random() *(10-1)+1);
    operacion = Math.round(Math.random() *(4-1)+1);
    flag = 1;

    switch(operacion)
    {
        case 1:
            operacion = "Suma";
            correcta = num1 + num2;
            break;
        case 2:
            operacion = "Resta"
            correcta = num1 - num2;
            break;
        case 3:
            operacion = "Multiplicación"
            correcta = num1 * num2;
            break;
        case 4:
            operacion = "División"
            correcta = parseInt(num1 / num2);
    }

    document.getElementById("txtIdPrimerNumero").value = num1;
    document.getElementById("txtIdSegundoNumero").value = num2;
    document.getElementById("txtIdOperador").value = operacion;
    
}//FIN DE LA FUNCIÓN
function Responder()
{
    respuesta = parseInt(document.getElementById("txtIdRespuesta").value)
    if(flag == 0)
    {
        alert("Primero debe presionar el boton de interrogación");
    }
    else if(respuesta == correcta)
        {
            alert("Felicidades, la respuesta es correcta");
        }
    else
    {
        alert("La respuesta es incorrecta, intente nuevamente");
    }


}//FIN DE LA FUNCIÓN
