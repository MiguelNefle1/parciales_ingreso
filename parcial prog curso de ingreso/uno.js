
function mostrar()
{

	var bandera=0;

for(i=0;i<5;i++)
{
	
	tipoProducto=prompt("Ingrese productos de prevención de contagio");

	while(tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol")
	{
		tipoProducto=prompt("No, Ingrese productos de prevención de contagio");
	}
	
	precio=prompt("Ingrese un precio entre 100 y 300");

	while(isNaN(precio) || precio <100 || precio > 300)
	{
		precio=prompt("No, Ingrese un precio entre 100 y 300");
	}

	cantidadUnidades=prompt("Ingrese la cantidad de unidades");
	
	while(isNaN(cantidadUnidades) || cantidadUnidades <1 || cantidadUnidades >= 1000)
	{
		cantidadUnidades=prompt("No, Ingrese la cantidad de unidades");
	}

	marcaProd=prompt("Ingrese la marca");

	while(!isNaN(marcaProd))
	{
		marcaProd=prompt("No, Ingrese la marca del producto");
	}

	fabricante=prompt("Ingrese el fabricante");

	while(!isNaN(fabricante))
	{
		fabricante=prompt("No, Ingrese el fabricante");
	}

	if(bandera==0){
		mayor
	}
	


}//fin for

document.write("Más caro de los barbijos, cantidad de unidades y fabricante: "+mayorPrecioBarbijo+" , "+contadorUni+" , "+fabricanteBarbijo+"<br>");
document.write("El fabricante de la mayor cantidad de unidades: "+mayorFabricante+"<br>");
document.write("Cantidad de jabones totales: "+contJabon+"<br>");

}

