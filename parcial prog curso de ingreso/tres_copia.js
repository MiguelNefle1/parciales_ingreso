
function mostrar() {
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var respuesta = "si";
	var edadMasChicaCasado=0;
	var nombreJovenCasado;
	var edadMasGrande=0;
	var nombreMasGrande;
	var contMujeresCoV=0;
	var cantMujeres=0;
	var cantHombresSolteros=0;
	var acumEdadMujer=0;
	var acumEdadHombresSolteros=0;
	var sexoMasGrande;
	var total=0;


	while(respuesta == "si")
	{
		nombre=prompt("Ingrese su nombre");
	
		while(!isNaN(nombre)){
			nombre = prompt("Error, Ingrese su nombre");
		}

		edad=parseInt(prompt("Ingrese su edad, debe ser mayor a 18"));

		while(isNaN(edad) || edad < 18){
		edad=parseInt(prompt("No, Ingrese su edad mayor a 18"));
		}
	
		sexo=prompt("Ingrese su sexo: f o m");
		
		while(sexo != "f" && sexo != "m"){
		sexo=prompt("No, Ingrese su sexo f o m");
		}
	
		estadoCivil=prompt("Ingrese su estado civil: soltero, casado o viudo");
		
		while(estadoCivil != "casado" && estadoCivil != "viudo" && estadoCivil != "soltero"){
		estadoCivil=prompt("No, Ingrese  soltero, casado o viudo");
		}

	// si es el primer ingreso seteo las edades iniciales
	if(total === 0) {
		edadMasGrande = edad;
	}
	else {
		if(edad > edadMasGrande){
			edadMasGrande = edad;
			sexoMasGrande = sexo;
			nombreMasGrande = nombre;
		}
	}

	if( estadoCivil == "casado" && sexo == "m" && edadMasChicaCasado < edad) {
		nombreJovenCasado = nombre;
	}

	if(sexo == "f" && estadoCivil == "casado" || estadoCivil == "viudo"){
		contMujeresCoV++;
	}
	if (sexo == "f"){
		cantMujeres++;
		acumEdadMujer = acumEdadMujer + edad
	}
	if (sexo == "m" && estadoCivil == "soltero"){
		cantHombresSolteros++;
		acumEdadHombresSolteros = acumEdadHombresSolteros + edad
	}

	total++;
	respuesta=prompt("Desea seguir iterando?");

	}//fin while


	document.write("El nombre del hombre casado más joven: "+nombreJovenCasado+"<br>")
	document.write("El sexo y nombre del pasajero/a más viejo: "+nombreMasGrande+", "+sexoMasGrande+"<br>")
	document.write("La cantidad de mujeres que hay casadas o viudas: "+contMujeresCoV+"<br>")
	document.write("El promedio de edad entre las mujeres: "+(acumEdadMujer/cantMujeres)+"<br>")
	document.write("El promedio de edad entre los hombres solteros: "+(acumEdadHombresSolteros/cantHombresSolteros)+"<br>")

}//fin


