// Hacemos una funcion para extraer el valor o venta de un input
function extraerNumeroDesdeElemento(elemento) {
    let miElemento = elemento.value;
    let miNumero = Number(miElemento);
    
    return miNumero;
}

// Hacemos una funcion para mostrar total de ventas en las tiendas
function calcular(){
    let ventas = [];
    let posicionVentas = 0;
    let elementosVentas = document.getElementById("divParrafos")

    for(let item of elementosVentas.children) {
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);
        ventas[posicionVentas] = valorVenta;
        posicionVentas = posicionVentas + 1;
    }

    let totalVentas = sumarTotal(ventas);
    let ventaMayorLlamada = ventaMayor(ventas);
    let ventaMenorLlamada = ventaMenor(ventas);

    for (let item of elementosVentas.children) {
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);

        item.children[1].className = "menuNeutro";

        if (valorVenta == ventaMayorLlamada){
            item.children[1].className = "menuInputMayor";
        }

        if (valorVenta == ventaMenorLlamada) {
            item.children[1].className = "menuInputMenor";
        }
    }
    

    let mensajeVentas = `Total Ventas: ${totalVentas} <br> Venta Mayor: ${ventaMayorLlamada} <br> Venta Menor: ${ventaMenorLlamada}`;
    let parrafoMostrarVentas = document.getElementById("parrafoMostrarVentas");

    parrafoMostrarVentas.innerHTML = `<div>${mensajeVentas}</div>`;
    parrafoMostrarVentas.firstChild.classList.add("textoCentrado");
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