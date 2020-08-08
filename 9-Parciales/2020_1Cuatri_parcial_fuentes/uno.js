/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{
	// Declaro las variables
	let cantidad;
	let cantidadAlcoholBarato = 0;
	let fabricante;
	let fabricanteAlcoholBarato;
	let marca;
	let mensajeAlcohol = "A- No se compraron alcoholes";
	let mensajePromedio;
	let mensajeJabones
	let precio;
	let precioAlcoholBarato;
	let producto;
	let productoMasComprado;
	let promedio;

	let flagAlcohol = 0;

	let acumuladorAlcohol = 0;
	let acumuladorBarbijo = 0;
	let acumuladorJabon = 0;

	let contadorAlcohol = 0;
	let contadorBarbijo = 0;
	let contadorJabon = 0;

	
	//Creo un bucle de 5 repeticiones (for)
	for(let i = 0; i < 5; i++)
	{
		//Ingreso y valido las características de cada producto
		producto = prompt("ingrese el producto (Alcohol, jabon o barbijo)").toLowerCase();
		while(producto != "barbijo" && producto != "alcohol" && producto != "jabon")
		{
			producto = prompt("El producto ingresado no es válido. Por favor, reingrese el producto (Alcohol, jabon o barbijo)").toLowerCase();
		}

		precio = parseFloat(prompt("Ingrese el precio del producto (entre 100 y 300"));

		while(precio<100 || precio>300 || isNaN(precio))
		{
			precio = parseFloat(prompt("El precio ingresado no es válido. Por favor, reingrese el precio (entre 100 y 300)"));
		}

		cantidad = parseInt(prompt("Ingrese la cantidad de productos (mayor a cero y menor o igual a 1000"));
		while(!(cantidad>0 && cantidad <=1000))
		{
			cantidad = parseInt(prompt("La cantidad ingresada no es válida. Por favor, reingrese la cantidad de productos (Mayor a 0 y menor o igual a 1000"));
		}
		marca = prompt("Ingrese la marca del producto");
		fabricante = prompt("Ingrese el fabricante del producto");

		//Dependiendo del product
		if (producto == "alcohol")
		{
			acumuladorAlcohol+= cantidad;
			contadorAlcohol++;	
			if(precioAlcoholBarato > precio || flagAlcohol == 0)
			{
				flagAlcohol = 1;
				precioAlcoholBarato = precio;
				cantidadAlcoholBarato = cantidad;
				fabricanteAlcoholBarato = fabricante;
			}
		}
		else if(producto == "barbijo")
		{
			acumuladorBarbijo+= cantidad;
			contadorBarbijo++;	
		}
		else
		{
			acumuladorJabon+= cantidad;
			contadorJabon++;	
		}
	}

	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
	{
		promedio = acumuladorAlcohol / contadorAlcohol;
		productoMasComprado = "alcohol"
	}
	else if (acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo >= acumuladorAlcohol)
	{
		promedio = acumuladorBarbijo / contadorBarbijo;
		productoMasComprado = "barbijo"
	}
	else
	{
		promedio = acumuladorJabon / contadorJabon;
		productoMasComprado = "jabon"
	}

	if(flagAlcohol)
	{
		//El \n es la version de Javascript del </br> en HTML
		mensajeAlcohol = "A- Fabricante del alcohol barato: " + fabricanteAlcoholBarato +
		"\nCantidad de alcohol barato: " + cantidadAlcoholBarato +
		"\nPrecio Alcohol Barato: " + precioAlcoholBarato;
	}
	mensajePromedio = "B- El producto mas comprado es " + productoMasComprado + 
	"\n y en promedio compramos " + promedio + " unidades por compra";

	mensajeJabones = "C- Actualmente tenemos " + acumuladorJabon + " unidades de jabon";

	alert(mensajeAlcohol + "\n" + "\n" + mensajePromedio + "\n" + "\n" + mensajeJabones);	
}
//Tiempo utilizado: Alrededor de 40 minutos. 