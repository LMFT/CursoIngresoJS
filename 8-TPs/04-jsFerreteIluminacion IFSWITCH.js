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
function CalcularPrecio() 
{
     //Declaro las variables
    let cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    let marca = document.getElementById("Marca").value;
    let descuento;
    let precioFinal;
    let precioUnitario;
    let impuestoFinal;
    const IMPUESTO = 1.1
    const PRECIO_LAMPARA = 35;

    switch(marca)
    {
        case "ArgentinaLuz":
            //Secuencia A

            if(cantidad>=6)
            {
                //Asigno el valor del descuento y calculo el precio final
                descuento = 0.5;
                precioUnitario = PRECIO_LAMPARA * descuento;
                precioFinal = precioUnitario * cantidad;

                //Secuencia E
                if(precioFinal <= 120)
                {
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2));
                }
                else
                {
                    impuestoFinal = precioFinal/10;
                    precioUnitario = precioUnitario * IMPUESTO;
                    precioFinal = precioFinal * IMPUESTO;
                    
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2)+". Usted abonó $"+impuestoFinal.toFixed(2)+" en concepto de impuestos brutos");
                }
            }
            // Secuencia B
            else if(cantidad==5)
            {
                //Asigno el valor del descuento y calculo el precio final
                descuento = 0.6;
                precioUnitario = PRECIO_LAMPARA * descuento;
                precioFinal = precioUnitario * cantidad;

                //Secuencia E
                if(precioFinal <= 120)
                {
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2));
                }
                else
                {
                    impuestoFinal = precioFinal/10;
                    precioUnitario = precioUnitario * IMPUESTO;
                    precioFinal = precioFinal * IMPUESTO;
                    
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2)+". Usted abonó $"+impuestoFinal.toFixed(2)+" en concepto de impuestos brutos");
                }
            }
            //Secuencia C
           else if(cantidad==4)
            {
                //Asigno el valor del descuento y calculo el precio final
                descuento = 0.75;
                precioUnitario = PRECIO_LAMPARA * descuento;
                precioFinal = precioUnitario * cantidad;

                //Secuencia E
                if(precioFinal <= 120)
                {
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2));
                }
                else
                {
                    impuestoFinal = precioFinal/10;
                    precioUnitario = precioUnitario * IMPUESTO;
                    precioFinal = precioFinal * IMPUESTO;
                    
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2)+". Usted abonó $"+impuestoFinal.toFixed(2)+" en concepto de impuestos brutos");
                }
            }
            //Secuencia D
            else if(cantidad==3)
            {
                //Asigno el valor del descuento y calculo el precio final
                descuento = 0.85;
                precioUnitario = PRECIO_LAMPARA * descuento;
                precioFinal = precioUnitario * cantidad;

                //Secuencia E
                if(precioFinal <= 120)
                {
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2));
                }
                else
                {
                    impuestoFinal = precioFinal/10;
                    precioUnitario = precioUnitario * IMPUESTO;
                    precioFinal = precioFinal * IMPUESTO;
                    
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2)+". Usted abonó $"+impuestoFinal.toFixed(2)+" en concepto de impuestos brutos");
                }
                
            }

            //En caso de que se compren 2 o menos lamparas hace la cuenta normalmente
            else if(cantidad>0 && cantidad<=2)
            {
                precioFinal = PRECIO_LAMPARA * cantidad;

                document.getElementById("txtIdprecioDescuento").value = "$" + precioUnitario.toFixed(2);
                alert("El monto final es $"+precioFinal.toFixed(2));
            }

            //Si se seleccionan 0 lamparas o una cantidad negativa el programa tira error
            else
            {
                alert("La cantidad ingresada es inválida")
            }
            break;
        
        case "FelipeLamparas":
             //Secuencia A
    
            if(cantidad>=6)
            {
                //Asigno el valor del descuento y calculo el precio final
                descuento = 0.5;
                precioUnitario = PRECIO_LAMPARA * descuento;
                precioFinal = precioUnitario * cantidad;
    
                //Secuencia E
                if(precioFinal <= 120)
                {
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2));
                }
                 else
                {
                    impuestoFinal = precioFinal/10;
                    precioUnitario = precioUnitario * IMPUESTO;
                    precioFinal = precioFinal * IMPUESTO;
                    
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2)+". Usted abonó $"+impuestoFinal.toFixed(2)+" en concepto de impuestos brutos");
                }
            }
            // Secuencia B
            else if(cantidad==5)
            {
                //Asigno el valor del descuento y calculo el precio final
                descuento = 0.7;
                precioUnitario = PRECIO_LAMPARA * descuento;
                precioFinal = precioUnitario * cantidad;
    
                //Secuencia E
                if(precioFinal <= 120)
                {
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2));
                }
                else
                   {
                    impuestoFinal = precioFinal/10;
                    precioUnitario = precioUnitario * IMPUESTO;
                    precioFinal = precioFinal * IMPUESTO;
                        
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2)+". Usted abonó $"+impuestoFinal.toFixed(2)+" en concepto de impuestos brutos");
                    }
            }
            //Secuencia C
            else if(cantidad==4)
            {
                //Asigno el valor del descuento y calculo el precio final
                descuento = 0.75;
                precioUnitario = PRECIO_LAMPARA * descuento;
                precioFinal = precioUnitario * cantidad;
                     //Secuencia E
                if(precioFinal <= 120)
                {
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2));
                }
                else
                {
                    impuestoFinal = precioFinal/10;
                    precioUnitario = precioUnitario * IMPUESTO;
                    precioFinal = precioFinal * IMPUESTO;
                    
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2)+". Usted abonó $"+impuestoFinal.toFixed(2)+" en concepto de impuestos brutos");
                }
            }
            //Secuencia D
            else if(cantidad==3)
            {
                //Asigno el valor del descuento y calculo el precio final
                descuento = 0.9;
                precioUnitario = PRECIO_LAMPARA * descuento;
                precioFinal = precioUnitario * cantidad;
    
                //Secuencia E
                if(precioFinal <= 120)
                {
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2));
                }
                else
                {
                    impuestoFinal = precioFinal/10;
                    precioUnitario = precioUnitario * IMPUESTO;
                    precioFinal = precioFinal * IMPUESTO;
                    
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2)+". Usted abonó $"+impuestoFinal.toFixed(2)+" en concepto de impuestos brutos");
                }
                 
            }
            //En caso de que se compren 2 o menos lamparas hace la cuenta normalmente
            else if(cantidad>0 && cantidad<=2)
            {
                precioFinal = PRECIO_LAMPARA * cantidad;
                document.getElementById("txtIdprecioDescuento").value = "$" + precioUnitario.toFixed(2);
                alert("El monto final es $"+precioFinal.toFixed(2));
            }
    
            //Si se seleccionan 0 lamparas o una cantidad negativa el programa tira error
            else
            {
                alert("La cantidad ingresada es inválida")
            }
            break;

            default:
            //Secuencia A
       
           if(cantidad>=6)
            {
                //Asigno el valor del descuento y calculo el precio final
                descuento = 0.5;
                precioUnitario = PRECIO_LAMPARA * descuento;
                precioFinal = precioUnitario * cantidad;
       
                //Secuencia E
                if(precioFinal <= 120)
                {
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2));
                }
                else
                {
                    impuestoFinal = precioFinal/10;
                    precioUnitario = precioUnitario * IMPUESTO;
                    precioFinal = precioFinal * IMPUESTO;
                       
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2)+". Usted abonó $"+impuestoFinal.toFixed(2)+" en concepto de impuestos brutos");
                }
            }
            // Secuencia B
            else if(cantidad==5)
            {
                //Asigno el valor del descuento y calculo el precio final
                descuento = 0.7;
                precioUnitario = PRECIO_LAMPARA * descuento;
                precioFinal = precioUnitario * cantidad;
       
                //Secuencia E
                if(precioFinal <= 120)
                {
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2));
                }
                else
                {
                    impuestoFinal = precioFinal/10;
                    precioUnitario = precioUnitario * IMPUESTO;
                    precioFinal = precioFinal * IMPUESTO;
                       
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2)+". Usted abonó $"+impuestoFinal.toFixed(2)+" en concepto de impuestos brutos");
                }
            }
            //Secuencia C
            else if(cantidad==4)
            {
                //Asigno el valor del descuento y calculo el precio final
                descuento = 0.75;
                precioUnitario = PRECIO_LAMPARA * descuento;
                precioFinal = precioUnitario * cantidad;
       
                //Secuencia E
                if(precioFinal <= 120)
                {
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2));
                }
                else
                {
                    impuestoFinal = precioFinal/10;
                    precioUnitario = precioUnitario * IMPUESTO;
                    precioFinal = precioFinal * IMPUESTO;
                     
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2)+". Usted abonó $"+impuestoFinal.toFixed(2)+" en concepto de impuestos brutos");
                }
            }
            //Secuencia D
            else if(cantidad==3)
            {
                //Asigno el valor del descuento y calculo el precio final
                descuento = 0.9;
                precioUnitario = PRECIO_LAMPARA * descuento;
                precioFinal = precioUnitario * cantidad;
       
                //Secuencia E
                if(precioFinal <= 120)
                {
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2));
                }
                else
                {
                    impuestoFinal = precioFinal/10;
                    precioUnitario = precioUnitario * IMPUESTO;
                    precioFinal = precioFinal * IMPUESTO;
                    
                    document.getElementById("txtIdprecioDescuento").value = "$"+precioUnitario.toFixed(2);
                    alert("El monto total es de $"+precioFinal.toFixed(2)+". Usted abonó $"+impuestoFinal.toFixed(2)+" en concepto de impuestos brutos");
                }
                    
            }
            //En caso de que se compren 2 o menos lamparas hace la cuenta normalmente
            else if(cantidad>0 && cantidad<=2)
            {
                precioFinal = PRECIO_LAMPARA * cantidad;
                document.getElementById("txtIdprecioDescuento").value = "$" + precioUnitario.toFixed(2);
                alert("El monto final es $"+precioFinal.toFixed(2));
            }
       
            //Si se seleccionan 0 lamparas o una cantidad negativa el programa tira error
            else
            {
                alert("La cantidad ingresada es inválida")
            }
            break;

    }
}