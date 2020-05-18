function mostrar()
{
var ingredientes;
var peso;
var precio;
var tipo;
var respuesta = "si";
var descuento;
var acumPrecio=0;
var maxPrecio=0;
var maxAlimento;
var acumPeso=10;


while(respuesta =="si")
{
  
  ingredientes=prompt("Ingrese el ingrediente a comprar");
 
    while(!isNaN(ingredientes))
    {
        ingredientes = prompt("Error, Ingrese el ingrediente");
    }

  peso=parseInt(prompt("Ingrese el peso"));

    while(isNaN(peso) || peso <10 || peso > 1000)
    {
      peso=parseInt(prompt("No, Ingrese el peso"));
    }
  
  precio=parseInt(prompt("Ingrese el precio"));

    while(isNaN(precio) || precio <0)
    {
      precio=parseInt(prompt("No, Ingrese el precio"));
    }
  
  tipo=prompt("Ingrese el tipo: v, a ó m");
    
    while(tipo != "v" && tipo != "a" && tipo != "m")
    {
      tipo=prompt("No, Ingrese v, a ó m");
    }

if (peso >= 100)
  {
    descuento=(precio*15)/100
  }

if (peso >= 300)
  {
    descuento=(precio*25)/100
  }

if(precio>maxPrecio)
  {
    maxPrecio = precio;
    maxAlimento = ingredientes
  }

acumPrecio = acumPrecio + precio
acumPeso = acumPeso + peso

respuesta = prompt("Desea seguir iterando?");

}//fin while
 
 document.write("Importe total a pagar, bruto sin descuento: "+acumPrecio+"<br>");
 document.write("Importe total a pagar con descuento: "+(acumPrecio-descuento)+"<br>");
 document.write("Tipo de alimento más caro: "+maxAlimento+"<br>");
 document.write("Promedio de precio por kilo: "+(acumPrecio/acumPeso)+"<br>");

}//fin
