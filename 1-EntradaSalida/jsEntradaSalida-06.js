/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero_a=document.getElementById("txtIdNumeroUno").value;
	var numero_b=document.getElementById("txtIdNumeroUno").value;
	var resultado;

	numero_a=parseInt(numero_a);
	numero_b=parseInt(numero_b);

	resultado = numero_a + numero_b;

	alert("El resultado de la suma es "+resultado);
}

