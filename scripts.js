// Hacemos una funcion para extraer el valor o venta de un input
function extraerNumeroDesdeElemento(elemento) {
    let miElemento = document.getElementById(elemento).value;
    let miNumero = Number(miElemento);
    
    return miNumero;
}

// Hacemos una funcion para mostrar total de ventas en las tiendas
function calcular(){
    let ventas = [];
    
    ventas[0] = extraerNumeroDesdeElemento("ventasTienda1");
    ventas[1] = extraerNumeroDesdeElemento("ventasTienda2");
    ventas[2] = extraerNumeroDesdeElemento("ventasTienda3");
    ventas[3] = extraerNumeroDesdeElemento("ventasTienda4");
    ventas[4] = extraerNumeroDesdeElemento("ventasTienda5");
    ventas[5] = extraerNumeroDesdeElemento("ventasTienda6");

    let totalVentas = sumarTotal(ventas);
    let ventaMayorLlamada = ventaMayor(ventas);
    let ventaMenorLlamada = ventaMenor(ventas);
    

    let mensajeVentas = `Total Ventas: ${totalVentas} <br> Venta Mayor: ${ventaMayorLlamada} <br> Venta Menor: ${ventaMenorLlamada}`;
    let parrafoMostrarVentas = document.getElementById("parrafoMostrarVentas");

    parrafoMostrarVentas.innerHTML = `${mensajeVentas}`;
}

function sumarTotal(array) {
    let total = 0;

    for(let venta of array) {
        total += venta;
    }
    return total; 
}

function ventaMayor(array) {
    let mayor = array[0]

    for(let venta = 0; venta < array.length; venta++){
        if (array[venta] > mayor) {
            mayor = array[venta];
        }
    }
    return mayor;
}

function ventaMenor(array) {
    let menor = array[0]

    for(let venta = 0; venta < array.length; venta++){
        if (array[venta] < menor) {
            menor = array[venta];
        }
    }
    return menor;
}

function crearParrafostienda(textoLabel, valorMin){
    // Creamos la etiqueta <p>
    let etiquetaP = document.createElement("p");

    // Creamos la etiqueta <label>
    let etiquetaLabel = document.createElement("label");
    
    // Los conectamos
    etiquetaLabel.setAttribute("for", textoLabel);
    etiquetaLabel.innerText = `${textoLabel}: `

    // Crear input
    let elementoInput = document.createElement("input");

    // Establecemos los atributos del input
    elementoInput.setAttribute("id", textoLabel);
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute("value", 0);

    // Agregamos input y label dentro de parrafo p
    etiquetaP.appendChild(etiquetaLabel);
    etiquetaP.appendChild(elementoInput);

    return etiquetaP;
}

function crearTiendas(IdContenedor, min, cantidadTiendas) {
    let elementoContenedor = document.getElementById(IdContenedor);

    for(let conteoTiendas = 1; conteoTiendas <= cantidadTiendas; conteoTiendas++) {
        
        let texto = `Tienda ${conteoTiendas}`;
        let parrafoTienda = crearParrafostienda(texto, min);
        elementoContenedor.appendChild(parrafoTienda);
    }
}