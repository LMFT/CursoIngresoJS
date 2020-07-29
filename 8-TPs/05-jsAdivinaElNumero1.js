/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto; 
let contador;
let flag = 0;

function comenzar()
{
	numeroSecreto = Math.round(Math.random() * 99+1);
  contador = 0;
  document.getElementById("txtIdIntentos").value = contador;
  flag = 1;
  alert(numeroSecreto);
  document.getElementById("txtIdNumero").focus;
}

function verificar()
{
  let numero;
  
  numero = parseInt(document.getElementById("txtIdNumero").value);

  if (flag == 0)
  {
    alert("Para jugar primero debes pulsar el boton Comenzar");
  }
  else
  {
    contador++;
    document.getElementById("txtIdIntentos").value = contador;

    if (numeroSecreto == numero)
    {
      alert("Usted es un ganador!!! Y en solo "+contador+" intentos");
      flag = 0
    }
    else if (numeroSecreto > numero)
    {
      alert("Falta...");
    }
    else
    {
      alert("Se paso...")
    }
  }

  document.getElementById("txtIdNumero").focus

}

