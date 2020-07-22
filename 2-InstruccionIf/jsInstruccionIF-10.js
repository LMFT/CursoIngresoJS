function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let nota;
	let maximo = 10;
	let minimo = 1;

	nota = Math.round(Math.random() * (maximo-minimo) + minimo);

	if(nota>=9)
	{
		alert("Su nota es "+nota +". Excelente");
	}

	else if(nota>=4 && nota<7)
	{
		alert("Su nota es "+nota +". Esta Aprobado")
	}
	else
	{
		alert("Su nota es "+ nota + ". Vamos que la proxima se puede")
	}

}//FIN DE LA FUNCIÓN