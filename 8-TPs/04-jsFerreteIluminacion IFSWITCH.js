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
    let precioUnitario;
    let impuesto;
    const IMPUESTO = 1.1
    const PRECIO_LAMPARA = 35;

    //Secuencia A
    if (cantidad >= 6) {
        //Asigno valor al descuento de los productos
        descuento = 0.5;

        //Calculo el precio final a pagar
        precioUnitario= PRECIO_LAMPARA * descuento;
        precioFinal = precioUnitario * cantidad;

        //Secuencia lógica E: Si el importe supera $120 adicionar un 10% en concepto de ingresos brutos
        if (precioFinal <= 120) 
        {
            document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
            alert("El monto total es $"+precioFinal.toFixed(2));
        }
        else
        {
            impuesto = precioFinal * 0.1;
            precioUnitario = precioUnitario * IMPUESTO;
            precioFinal = precioFinal * IMPUESTO;

            document.getElementById("txtIdprecioDescuento").value = "$" + precioUnitario.toFixed(2);
            alert("El monto total es de $"+precioFinal.toFixed(2)+". Usted abonó $"+impuesto.toFixed(2)+" en concepto de ingresos brutos");

        }

    }

    //Secuencia B

    else if(cantidad == 5 && marca == "ArgentinaLuz")
    {
        //Asigno valor al descuento de los productos
        descuento = 0.6;

        //Calculo el precio final a pagar
        precioUnitario = PRECIO_LAMPARA * descuento;
        precioFinal = precioUnitario * cantidad;

        //Secuencia lógica E: Si el importe supera $120 adicionar un 10% en concepto de ingresos brutos
        if (precioFinal <= 120) 
        {
            document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
            alert("El monto total es $"+precioFinal.toFixed(2));
        }
        else
        {
            impuesto = precioFinal * 0.1;
            precioUnitario = precioUnitario * IMPUESTO;
            precioFinal = precioFinal * IMPUESTO;

            document.getElementById("txtIdprecioDescuento").value = "$" + precioUnitario.toFixed(2);
            alert("El monto total es de $"+precioFinal.toFixed(2)+". Usted abonó $"+impuesto.toFixed(2)+" en concepto de ingresos brutos");
        }
    }

    else if (cantidad == 5 && marca != "ArgentinaLuz")
    {
        //Asigno valor al descuento de los productos
        descuento = 0.7;

        //Calculo el precio final a pagar
        precioUnitario = PRECIO_LAMPARA * descuento;
        precioFinal = precioUnitario * cantidad;

        //Secuencia lógica E: Si el importe supera $120 adicionar un 10% en concepto de ingresos brutos
        if (precioFinal <= 120) 
        {
            document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
            alert("El monto total es $"+precioFinal.toFixed(2));
        }
        else
        {
            impuesto = precioFinal * 0.1;
            precioUnitario = precioUnitario * IMPUESTO;
            precioFinal = precioFinal * IMPUESTO;

            document.getElementById("txtIdprecioDescuento").value = "$" + precioUnitario.toFixed(2);
            alert("El monto total es de $"+precioFinal.toFixed(2)+". Usted abonó $"+impuesto.toFixed(2)+" en concepto de ingresos brutos");
        }
    }
    // Secuencia C
    else if ((cantidad == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas")))
    {
       //Asigno valor al descuento de los productos
       descuento = 0.75;

       //Calculo el precio final a pagar
       precioUnitario = PRECIO_LAMPARA * descuento;
       precioFinal = precioUnitario * cantidad;

       //Secuencia lógica E: Si el importe supera $120 adicionar un 10% en concepto de ingresos brutos
       if (precioFinal <= 120) 
       {
           document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
           alert("El monto total es $"+precioFinal.toFixed(2));
       }
       else
       {
           impuesto = precioFinal * 0.1;
           precioUnitario = precioUnitario * IMPUESTO;
           precioFinal = precioFinal * IMPUESTO;

           document.getElementById("txtIdprecioDescuento").value = "$" + precioUnitario.toFixed(2);
           alert("El monto total es de $"+precioFinal.toFixed(2)+". Usted abonó $"+impuesto.toFixed(2)+" en concepto de ingresos brutos");
       } 
    }
    else if (cantidad == 4 && !(marca == "ArgentinaLuz" || marca == "FelipeLamparas"))
    {
        //Asigno valor al descuento de los productos
       descuento = 0.8;

       //Calculo el precio final a pagar
       precioUnitario = PRECIO_LAMPARA * descuento;
       precioFinal = precioUnitario * cantidad;

       //Secuencia lógica E: Si el importe supera $120 adicionar un 10% en concepto de ingresos brutos
       if (precioFinal <= 120) 
       {
           document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
           alert("El monto total es $"+precioFinal.toFixed(2));
       }
       else
       {
           impuesto = precioFinal * 0.1;
           precioUnitario = precioUnitario * IMPUESTO;
           precioFinal = precioFinal * IMPUESTO;

           document.getElementById("txtIdprecioDescuento").value = "$" + precioUnitario.toFixed(2);
           alert("El monto total es de $"+precioFinal.toFixed(2)+". Usted abonó $"+impuesto.toFixed(2)+" en concepto de ingresos brutos");
       } 
    }

    // Secuencia D
    else if (cantidad == 3 && marca == "ArgentinaLuz")
    {
        //Asigno valor al descuento de los productos
        descuento = 0.85;

        //Calculo el precio final a pagar
        precioUnitario = PRECIO_LAMPARA * descuento;
        precioFinal = precioUnitario * cantidad;

        //Secuencia lógica E: Si el importe supera $120 adicionar un 10% en concepto de ingresos brutos
        if (precioFinal <= 120) 
        {
            document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
            alert("El monto total es $"+precioFinal.toFixed(2));
        }
        else
        {
            impuesto = precioFinal * 0.1;
            precioUnitario = precioUnitario * IMPUESTO;
            precioFinal = precioFinal * IMPUESTO;

            document.getElementById("txtIdprecioDescuento").value = "$" + precioUnitario.toFixed(2);
            alert("El monto total es de $"+precioFinal.toFixed(2)+". Usted abonó $"+impuesto.toFixed(2)+" en concepto de ingresos brutos");
        }
    }
    else if (cantidad == 3 && marca == "FelipeLamparas")
    {
        //Asigno valor al descuento de los productos
        descuento = 0.9;

        //Calculo el precio final a pagar
        precioUnitario = PRECIO_LAMPARA * descuento;
        precioFinal = precioUnitario * cantidad;

        //Secuencia lógica E: Si el importe supera $120 adicionar un 10% en concepto de ingresos brutos
        if (precioFinal <= 120) 
        {
            document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
            alert("El monto total es $"+precioFinal.toFixed(2));
        }
        else
        {
            impuesto = precioFinal * 0.1;
            precioUnitario = precioUnitario * IMPUESTO;
            precioFinal = precioFinal * IMPUESTO;

            document.getElementById("txtIdprecioDescuento").value = "$" + precioUnitario.toFixed(2);
            alert("El monto total es de $"+precioFinal.toFixed(2)+". Usted abonó $"+impuesto.toFixed(2)+" en concepto de ingresos brutos");
        }
    }
    else if (cantidad == 3 && (marca != "ArgentinaLuz" && marca != "FelipeLamparas"))
    {
        //Asigno valor al descuento de los productos
        descuento = 0.95;

        //Calculo el precio final a pagar
        precioUnitario = PRECIO_LAMPARA * descuento;
        precioFinal = precioUnitario * cantidad;

        //Secuencia lógica E: Si el importe supera $120 adicionar un 10% en concepto de ingresos brutos
        if (precioFinal <= 120) 
        {
            document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
            alert("El monto total es $"+precioFinal.toFixed(2));
        }
        else
        {
            impuesto = precioFinal * 0.1;
            precioUnitario = precioUnitario * IMPUESTO;
            precioFinal = precioFinal * IMPUESTO;

            document.getElementById("txtIdprecioDescuento").value = "$" + precioUnitario.toFixed(2);
            alert("El monto total es de $"+precioFinal.toFixed(2)+". Usted abonó $"+impuesto.toFixed(2)+" en concepto de ingresos brutos");
        }
    }
    else
    {
        precioFinal = PRECIO_LAMPARA * cantidad;

        document.getElementById("txtIdprecioDescuento").value = "$" + PRECIO_LAMPARA;
        alert("El monto final es $"+precioFinal);
    }
}