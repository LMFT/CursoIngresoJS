/*Bienvenidos (SOLO WITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y 
cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
Curso de ingreso UTN FRA*/
function mostrar()
{
    let cantidad;
    let destino;
    let descuento = 1;
    let medioPago;
    let precio = 0;
    const PRECIO_DIA = 100;

    cantidad = parseInt(prompt("Ingrese la cantidad de dias"));
    while(!(cantidad > 0))
    {
        
        cantidad = parseInt(prompt("La cantidad ingresada no es válida. Reingrese la cantidad de dias"));
    }

    medioPago = prompt("Ingrese un medio de pago (debito, efectivo, mercadopago, otro").toLowerCase();

    while(medioPago != "debito" && medioPago != "débito" && medioPago != "efectivo" && medioPago != "mercadopago" && medioPago != "otro")
    {
        medioPago = prompt("El medio ingresado no es válido. Ingrese un medio de pago (debito, efectivo, mercadopago, otro").toLowerCase();
    }

    destino = document.getElementById("Marca").value;

    switch(destino)
	{
	
		case "América":
            if(medioPago == "debito" || medioPago == "débito")
            {
            descuento = 0.4;
            }
            else
            {
                descuento = 0.5;
            }
            precio = cantidad * PRECIO_DIA * descuento;
			break;
		
		case "África":
            if(medioPago == "mercadopago" || medioPago == "efectivo")
            {
            descuento = 0.75;
            }
            else
            {
                descuento = 0.6;
            }
            precio = cantidad * PRECIO_DIA * descuento;
			
			
			break;
            
        case "Europa":
            if(medioPago == "debito" || medioPago == "débito")
            {
            descuento = 0.65;
            }
            else if(medioPago == "mercadopago")
            {
                descuento = 0.7;
            }
            else
            {
                descuento = 0.75
            }
            precio = cantidad * PRECIO_DIA * descuento;    
            break;
        
            case "Asia":
            precio = cantidad * PRECIO_DIA * descuento;
			break;
       
            case "Oceania":
            precio = cantidad * PRECIO_DIA * descuento;
			break;
	}


	alert("El precio final es de $"+precio);
}
