let numero;
let contadorGanadas = 0;
let contadorPerdidas = 0;
let contadorEmpates = 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	numero = Math.round(Math.random() * 2 + 1);

}//FIN DE LA FUNCIÓN

function piedra()
{
	switch (numero)
    {
        case 1:
			alert("Empate");
			contadorEmpates++;
			document.getElementById("txtIdEmpatadas").value = "Juegos Empatados: " + contadorEmpates;
            break;
        case 2:
			alert("Perdió");
			contadorPerdidas++;
			document.getElementById("txtIdPerdidas").value = "Juegos perdidos: " + contadorPerdidas;
            break;
        case 3:
			alert("Ganó");
			contadorGanadas++;
			document.getElementById("txtIdGanadas").value = "Juegos Ganados: " + contadorGanadas;
            break;
	}
	numero = Math.round(Math.random() * 2 + 1);

}//FIN DE LA FUNCIÓN

function papel()
{
	switch (numero)
    {
        case 1:
			alert("Ganó");
			contadorGanadas++;
			document.getElementById("txtIdGanadas").value = "Juegos Ganados: " + contadorGanadas;
            break;
        case 2:
			alert("Empate");
			contadorEmpates++;
			document.getElementById("txtIdEmpatadas").value = "Juegos Empatados: " + contadorEmpates;
            break;
        case 3:
			alert("Perdió");
			contadorPerdidas++;
			document.getElementById("txtIdPerdidas").value = "Juegos perdidos: " + contadorPerdidas;
            break;
	}
	numero = Math.round(Math.random() * 2 + 1);
}//FIN DE LA FUNCIÓN

function tijera()
{
	switch (numero)
    {
        case 1:
			alert("Perdió");
			contadorPerdidas++;
			document.getElementById("txtIdPerdidas").value = "Juegos perdidos: " + contadorPerdidas;
            break;
        case 2:
			alert("Ganó");
			contadorGanadas++;
			document.getElementById("txtIdGanadas").value = "Juegos Ganados: " + contadorGanadas;
            break;
        case 3:
			alert("Empate");
			contadorEmpates++;
			document.getElementById("txtIdEmpatadas").value = "Juegos Empatados: " + contadorEmpates;
			break;
	}
	numero = Math.round(Math.random() * 2 + 1);
     
}//FIN DE LA FUNCIÓN


function mostrarResultado()
{
	
	document.getElementById("txtIdGanadas").value = contadorGanadas;
	document.getElementById("txtIdPerdidas").value = contadorPerdidas;
	document.getElementById("txtIdEmpatadas").value = contadorEmpates;

}