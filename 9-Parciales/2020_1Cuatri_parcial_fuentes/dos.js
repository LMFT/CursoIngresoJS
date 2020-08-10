/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que 
el cliente quiera:

Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
Curso de ingreso UTN FRA*/

function mostrar() {
  let mensajeBolsas;
  let cantidad;
  let cantidadMasCara;
  let descuento;
  let flagPrecioCaro = 0;
  let material;
  let materialMasCantidad;
  let materialMasCaro;
  let precioMasCaro;
  let precio;
  let precioParcial = 0;
  let precioFinal = 0;
  let precioFinalDescuento;
  let respuesta;

  let acumuladorBolsas = 0;
  let acumuladorBolsasArena = 0;
  let acumuladorBolsasCal = 0;
  let acumuladorBolsasCemento = 0;


  //Creo el bucle y valido los datos que ingreso
  do {
    material = prompt("Ingrese el material deseado (arena, cal o cemento)").toLowerCase();

    while (material != "arena" && material != "cal" && material != "cemento") {
      material = prompt("Error: El material ingresado no es válido. Reingrese el material deseado (arena, cal o cemento)").toLowerCase();
    }

    cantidad = parseInt(prompt("Ingrese la cantidad de bolsas a comprar (mayor a 0)"));
    while (!(cantidad > 0)) {
      cantidad = prompt("Error: La cantidad ingresada no es válida. Reingrese la cantidad de bolsas a comprar (mayor a 0)");
    }

    precio = parseFloat(prompt("Ingrese el precio de las bolsas (mayor a 0)"));

    while (!(precio > 0)) {
      precio = parseFloat(prompt("Error: El precio ingresada no es válido. Reingrese el precio por bolsa (mayor a 0)"));
    }
    //Acumulo cantidad de bolsas y precio final
    acumuladorBolsas += cantidad;
    precioParcial = precio * cantidad;
    precioFinal += precioParcial;

    //acumulo bolsas de cada material para determinar cual tiene mayor cantidad
    if (material == "arena") {
      acumuladorBolsasArena += cantidad;
    }
    else if (material == "cal") {
      acumuladorBolsasCal += cantidad;
    }
    else {
      acumuladorBolsasCemento += cantidad;
    }

    // Si tengo un nuevo material mas caro lo actualizo
    if (flagPrecioCaro == 0 || materialMasCaro < precio) {
      flagPrecioCaro = 1
      materialMasCaro = material;
      precioMasCaro = precio;
      cantidadMasCara = cantidad;
    }
    respuesta = prompt("Quiere ingresar otro material?")
  } while (respuesta == 's');
  //Calculo
  if (acumuladorBolsas < 10) {
    descuento = 1;
  }
  else if (acumuladorBolsas > 30) {
    descuento = 0.75;
  }
  else {
    descuento = 0.85;
  }

  precioFinalDescuento = precioFinal * descuento;

  if (acumuladorBolsasArena > acumuladorBolsasCal && acumuladorBolsasArena > acumuladorBolsasCemento) {
    materialMasCantidad = "Arena";
    mensajeBolsas = acumuladorBolsasArena;
  }
  else if (acumuladorBolsasCal > acumuladorBolsasCemento && acumuladorBolsasCal >= acumuladorBolsasArena) {
    materialMasCantidad = "Cal";
    mensajeBolsas = acumuladorBolsasCal;
  }
  else {
    materialMasCantidad = "Cemento"
    mensajeBolsas = acumuladorBolsasCemento;
  }

  console.log("El importe final bruto es de: $" + precioFinal);
  if (precioFinalDescuento != precioFinal) {
    console.log("El importe final con descuento es de: $" + precioFinalDescuento);
  }

  console.log("El material con mas bolsas es " + materialMasCantidad + " con un total de " + mensajeBolsas);
  console.log("El material mas caro por unidad fue " + materialMasCaro + " con un precio por bolsa de $" + precioMasCaro + " y un total de " + cantidadMasCara);

}
