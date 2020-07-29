/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let numero;

function comenzar()
{
    numero = Math.round(Math.random() * 2 + 1);
}//FIN DE LA FUNCIÓN

function piedra()
{
    switch (numero)
    {
        case 1:
            alert("Empate")
            break;
        case 2:
            alert("Perdió")
            break;
        case 3:
            alert("Ganó")
            break;
    }
    numero = Math.round(Math.random() * 2 + 1);

}//FIN DE LA FUNCIÓN
function papel()
{
    switch (numero)
    {
        case 1:
            alert("Ganó")
            break;
        case 2:
            alert("Empate")
            break;
        case 3:
            alert("Perdió")
            break;
    }
    numero = Math.round(Math.random() * 2 + 1);

}//FIN DE LA FUNCIÓN
function tijera()
{
	switch (numero)
    {
        case 1:
            alert("Perdió")
            break;
        case 2:
            alert("Ganó")
            break;
        case 3:
            alert("Empate")
            break;
    }
    numero = Math.round(Math.random() * 2 + 1);

}//FIN DE LA FUNCIÓN