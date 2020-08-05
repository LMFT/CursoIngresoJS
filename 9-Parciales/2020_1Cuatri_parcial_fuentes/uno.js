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
	let producto;
	let precio;
	let precioPromedioMasUnidades;
	let cantidad;
	let marca;
	let fabricante;
	let precioAlcoholBarato;
	let cantidadAlcoholBarato = 0;
	let fabricanteAlcoholBarato;
	let promedioMasUnidades;
	let acumuladorCantidadJabon = 0;
	let acumuladorCantidadBarbijo = 0;
	let acumuladorCantidadAlcohol = 0;
	let flag = 0;
	let contadorPrecioJabon = 0;
	let contadorPrecioBarbijo = 0;
	let contadorPrecioAlcohol = 0;
	let acumuladorPrecioAlcohol = 0;
	let acumuladorPrecioJabon = 0;
	let acumuladorPrecioBarbijo = 0;

	for(let i = 0; i < 5; i++)
	{
		producto = prompt("ingrese el producto (Alcohol, jabon o barbijo)");
		producto = producto.toLowerCase();
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
		
		if(producto == "alcohol")
		{
			acumuladorCantidadAlcohol+=cantidad;
			acumuladorPrecioAlcohol+= precio;
			contadorPrecioAlcohol++;
		}
		else if(producto == "jabon")
		{
			acumuladorCantidadJabon+=cantidad;
			acumuladorPrecioJabon+=precio;
			contadorPrecioJabon++;
		}
		else
		{
			acumuladorCantidadBarbijo+=cantidad;
			acumuladorPrecioBarbijo+= precio;
			contadorPrecioJabon++;
		}

		if(producto == "alcohol" && flag == 0)
		{
			precioAlcoholBarato = precio;
			cantidadAlcoholBarato = cantidad; 
			fabricanteAlcoholBarato = fabricante;
		}
		else if(precioAlcoholBarato > precio)
		{
			precioAlcoholBarato = precio;
			cantidadAlcoholBarato = cantidad; 
			fabricanteAlcoholBarato = fabricante;
		}

	}

	if(acumuladorCantidadAlcohol > acumuladorCantidadBarbijo && acumuladorCantidadAlcohol > acumuladorCantidadJabon)
	{
		precioPromedioMasUnidades = acumuladorPrecioAlcohol / contadorPrecioAlcohol;
		promedioMasUnidades = acumuladorCantidadAlcohol / precioPromedioMasUnidades;
	}
	else if (acumuladorCantidadBarbijo > acumuladorCantidadJabon)
	{
		precioPromedioMasUnidades = acumuladorPrecioBarbijo / contadorPrecioBarbijo;
		promedioMasUnidades = acumuladorCantidadBarbijo / precioPromedioMasUnidades;
	}
	else
	{
		precioPromedioMasUnidades = acumuladorPrecioJabon / contadorPrecioJabon;
		promedioMasUnidades = acumuladorCantidadJabon / precioPromedioMasUnidades;
	}

	console.log("Cantidad Alcohol mas barato: " + cantidadAlcoholBarato);
	console.log("Fabricante Alcohol mas barato: " + fabricanteAlcoholBarato);
	console.log("Promedio del precio del articulo con mas unidades: " + promedioMasUnidades.toFixed(2));
	console.log("Cantidad Jabon: " + acumuladorCantidadJabon);
	



}
//Tiempo utilizado: Alrededor de 40 minutos. 