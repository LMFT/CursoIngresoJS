/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

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
      flag = 0

      switch(contador)
{
  case 1:
    alert("Usted es un psiquico");
    break;
  case 2:
    alert("Excelente percepcion");
    break;
  case 3:
    alert("Esto es suerte");
    break;
  case 4:
    alert("Excelente técnica");
    break;
  case 5:
    alert("Usted esta dentro de la media");
    break;
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    alert("Falta técnica")
    break;
  default:
    alert("Afortunado en el amor!") 
    break;
}
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