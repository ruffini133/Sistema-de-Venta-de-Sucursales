// Hacemos una funcion para extraer el valor o venta de un input
function extraerNumeroDesdeElemento(elemento) {
    let miElemento = document.getElementById(elemento).value;
    let miNumero = Number(miElemento);
    
    return miNumero;
}

// Hacemos una funcion para mostrar total de ventas en las tiendas
function calcular(){
    let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6;
    
    ventas1 = extraerNumeroDesdeElemento("ventasTienda1");
    ventas2 = extraerNumeroDesdeElemento("ventasTienda2");
    ventas3 = extraerNumeroDesdeElemento("ventasTienda3");
    ventas4 = extraerNumeroDesdeElemento("ventasTienda4");
    ventas5 = extraerNumeroDesdeElemento("ventasTienda5");
    ventas6 = extraerNumeroDesdeElemento("ventasTienda6");

    let totalVentas = ventas1 + ventas2 + ventas3 + ventas4 + ventas5 + ventas6;

    let mensajeVentas = `Total Ventas: ${totalVentas}`;
    let parrafoMostrarVentas = document.getElementById("parrafoMostrarVentas");

    parrafoMostrarVentas.textContent = mensajeVentas;
}