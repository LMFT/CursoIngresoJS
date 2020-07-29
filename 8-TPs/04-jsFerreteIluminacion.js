/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
    y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un 
    descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  
    “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos 
    en informar del impuestoFinal con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuestoFinal que se pagó. 

 */

 
function CalcularPrecio() 
{
     //Declaro las variables
    let cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    let marca = document.getElementById("Marca").value;
    let descuento;
    let precioFinal;
    let precioUnitario;
    let impuesto;
    const PRECIO_LAMPARA = 35;

    if(cantidad >= 6)
    {
        descuento = 0.5;
    }
    else if (cantidad == 5 && marca == "ArgentinaLuz")
    {
        descuento = 0.6;
    }
    else if(cantidad == 5 && marca != "ArgentinaLuz")
    {
        descuento = 0.7;
    }
    else if(cantidad == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas"))
    {
        descuento = 0.75;
    }
    else if (cantidad == 4 && !(marca == "ArgentinaLuz" || marca == "FelipeLamparas"))
    {
        descuento = 0.8;
    }
    else if (cantidad == 3 && marca == "ArgentinaLuz")
    {
        descuento = 0.85;
    }
    else if (cantidad == 3 && marca == "FelipeLamparas")
    {
        descuento = 0.9;
    }
    else if (cantidad == 3 && !(marca == "ArgentinaLuz" || "FelipeLamparas"))
    {
        descuento = 0.95;
    }
    else if (cantidad > 0 && cantidad <= 2)
    {
        descuento = 1
    }

    precioUnitario = PRECIO_LAMPARA * descuento;
    precioFinal = precioUnitario * cantidad;

    if (precioFinal > 120)
    {
        impuesto = precioFinal / 10;
        precioFinal += impuesto;

        document.getElementById("txtIdprecioDescuento").value = "$" + precioUnitario.toFixed(2);
        alert("El monto total es de $"+precioFinal.toFixed(2)+". IIBB: Usted abonó $"+impuesto.toFixed(2)+" en concepto de ingresos brutos");
    }
    else
    {
        document.getElementById("txtIdprecioDescuento").value = "$" + precioUnitario.toFixed(2);
        alert("El monto total es de $"+precioFinal.toFixed(2));  
    }
}