/*Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.*/

function mostrar()
{
    let descuento;
    let precio;
    let precioFinal;

    precio = parseFloat(prompt("Ingrese el precio (mayor a 0)"));
    while(!(precio > 0))
    {
        precio = parseFloat(prompt("El precio no es valido. Ingrese el precio (mayor a 0)"));
    }

    descuento = parseFloat(prompt("Ingrese el descuento (entre 0 y 100)"));
    
    while(!(descuento >=0 && descuento <= 100))
    {
    descuento = parseFloat(prompt("Descuento inválido. Ingrese el descuento (entre 0 y 100)"));
    }

    precioFinal = precio * ((100 -descuento) /100)

    document.getElementById("elPrecioFinal").value = "$" + precioFinal + ". Descuento aplicado: " + descuento + "%";
    
}
