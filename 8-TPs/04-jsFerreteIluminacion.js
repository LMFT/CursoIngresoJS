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
    en informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
     //Declaro las variables
    let cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    let marca = document.getElementById("Marca").value;
    let descuento;
    let precioFinal;
    let impuesto;
    const PRECIO_LAMPARA = 35;

    //Secuencia Lógica A y E: Si la cantidad de lamparas es mayor a 6 se aplica un 50% de descuento
    if (cantidad >= 6) {
        //Asigno valor al descuento de los productos
        descuento = 50 / 100;

        //Calculo el precio final a pagar
        precioFinal = cantidad * PRECIO_LAMPARA * descuento;

        //Imprimo el precio en pantalla
        document.getElementById("txtIdprecioDescuento").value = "$" + precioFinal;

        //Secuencia lógica E: Si el importe supera $120 adicionar un 10% en concepto de ingresos brutos
        if (precioFinal > 120) {
            impuesto = precioFinal * 10 / 100;

            precioFinal = precioFinal + impuesto;

            document.getElementById("txtIdprecioDescuento").value = "$" + precioFinal + ". IIBB: Usted abonó $" + impuesto + " en concepto de ingresos brutos";
        }

    }

    //Secuencia B: Si la cantidad de lamparas es 5 y son "ArgentinaLuz" aplica 40% de descuento, otras marcas aplican 30%
    if (cantidad == 5 && marca == "ArgentinaLuz") {
        descuento = 40 / 100;

        precioFinal = cantidad * PRECIO_LAMPARA * descuento;

        document.getElementById("txtIdprecioDescuento").value = "$" + precioFinal;

        //Secuencia lógica E: Si el importe supera $120 adicionar un 10% en concepto de ingresos brutos
        if (precioFinal > 120) {
            impuesto = precioFinal * 10 / 100;

            precioFinal = precioFinal + impuesto;

            document.getElementById("txtIdprecioDescuento").value = "$" + precioFinal + ". IIBB: Usted abonó $" + impuesto + " en concepto de ingresos brutos";
        }


    }

    if (cantidad == 5 && marca != "ArgentinaLuz") {
        descuento = 30 / 100

        precioFinal = cantidad * PRECIO_LAMPARA * descuento

        document.getElementById("txtIdprecioDescuento") = "$" + precioFinal;

        //Secuencia lógica E: Si el importe supera $120 adicionar un 10% en concepto de ingresos brutos
        if (precioFinal > 120) {
            impuesto = precioFinal * 10 / 100;

            precioFinal = precioFinal + impuesto;

            document.getElementById("txtIdprecioDescuento").value = "$" + precioFinal + ". IIBB: Usted abonó $" + impuesto + " en concepto de ingresos brutos";
        }
    }

    /*Secuencia C: si la cantidad es igual a 4 lamparas y marcas "ArgentinaLuz" o "FelipeLamparas" aplica 25% descuento
     pero si son otras marcas el descuento es de 20%*/
    if ((cantidad == 4 && marca == "ArgentinaLuz") || (cantidad == 4 && marca == "FelipeLamparas")) {
        descuento = 25 / 100;

        precioFinal = cantidad * PRECIO_LAMPARA * descuento;

        document.getElementById("txtIdprecioDescuento") = "$" + precioFinal;

        //Secuencia lógica E: Si el importe supera $120 adicionar un 10% en concepto de ingresos brutos
        if (precioFinal > 120) {
            impuesto = precioFinal * 10 / 100;

            precioFinal = precioFinal + impuesto;

            document.getElementById("txtIdprecioDescuento").value = "$" + precioFinal + ". IIBB: Usted abonó $" + impuesto + " en concepto de ingresos brutos";
        }

    }

    if (cantidad == 4 && (marca != "ArgentinaLuz" && marca != "FelipeLamparas")) {
        descuento = 20 / 100;

        precioFinal = cantidad * PRECIO_LAMPARA * descuento;

        document.getElementById("txtIdprecioDescuento") = "$" + precioFinal;

        //Secuencia lógica E: Si el importe supera $120 adicionar un 10% en concepto de ingresos brutos
        if (precioFinal > 120) {
            impuesto = precioFinal * 10 / 100;

            precioFinal = precioFinal + impuesto;

            document.getElementById("txtIdprecioDescuento").value = "$" + precioFinal + ". IIBB: Usted abonó $" + impuesto + " en concepto de ingresos brutos";
        }
    }

    /*Secuencia D: Si compra 3 lamparas "ArgentinaLuz" 15% de descuento, 10% si la marca es "FelipeLamparas" 
       y 5% para otras marcas*/

    if (cantidad == 3 && marca == "ArgentinaLuz") {
        descuento = 15 / 100;

        precioFinal = cantidad * PRECIO_LAMPARA * descuento;

        document.getElementById("txtIdprecioDescuento") = "$" + precioFinal;

        //Secuencia lógica E: Si el importe supera $120 adicionar un 10% en concepto de ingresos brutos
        if (precioFinal > 120) {
            impuesto = precioFinal * 10 / 100;

            precioFinal = precioFinal + impuesto;

            document.getElementById("txtIdprecioDescuento").value = "$" + precioFinal + ". IIBB: Usted abonó $" + impuesto + " en concepto de ingresos brutos";
        }
    }

    if (camtidad == 3 && marca == "FelipeLamparas") {
        descuento = 10 / 100

        precioFinal = cantidad * PRECIO_LAMPARA * descuento;

        document.getElementById("txtIdprecioDescuento") = "$" + precioFinal;

        //Secuencia lógica E: Si el importe supera $120 adicionar un 10% en concepto de ingresos brutos
        if (precioFinal > 120) {
            impuesto = precioFinal * 10 / 100;

            precioFinal = precioFinal + impuesto;

            document.getElementById("txtIdprecioDescuento").value = "$" + precioFinal + ". IIBB: Usted abonó $" + impuesto + " en concepto de ingresos brutos";
        }
    }

    else {
        descuento = 5 / 100;

        precioFinal = cantidad * PRECIO_LAMPARA * descuento

        document.getElementById("txtIdprecioDescuento") = "$" + precioFinal;

        //Secuencia lógica E: Si el importe supera $120 adicionar un 10% en concepto de ingresos brutos
        if (precioFinal > 120) {
            impuesto = precioFinal * 10 / 100;

            precioFinal = precioFinal + impuesto;

            document.getElementById("txtIdprecioDescuento").value = "$" + precioFinal + ". IIBB: Usted abonó $" + impuesto + " en concepto de ingresos brutos";
        }
    }
}
