/*Bienvenidos.
Realizar el algoritmo que pida los datos necesarios para un triángulo 
equilátero por prompt y que muestre el perímetro por alert.*/
function mostrar()
{
    let lado;
    let perimetro;

     lado = parseFloat(prompt("Ingrese un lado del triangulo equilatero (mayor a 0)"));
     while (lado <= 0 || isNaN(lado))
     {
        lado = prompt("La medida ingresada no es válida. Ingrese un lado del triangulo equilatero (mayor a 0)");
     }

     perimetro = lado * 3;

     alert("El perimetro del triangulo es " + perimetro)
}
