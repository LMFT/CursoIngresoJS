/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo=document.getElementById("txtIdNumeroDividendo").value;
	var divisor=document.getElementById("txtIdNumeroDivisor").value;
	var cociente;
	var resto;

	dividendo=parseInt(dividendo);
	divisor=parseInt(divisor);

	cociente = dividendo/divisor;
	cociente=parseInt(cociente);
	resto = dividendo - (cociente * divisor);

	alert("El resto es: "+resto);
}
