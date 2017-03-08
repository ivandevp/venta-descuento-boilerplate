+function() {
	// Elementos
	var precioTotal = document.getElementById("precio-total");
    var descuento = document.getElementById("descuento")
    
	// Manejador de Evento
	precioTotal.addEventListener("click", function () {
		var cantidad = document.getElementById("cantidad").value;
		var precio = document.getElementById("precio").value;
        var porcentajeDescuento = document.getElementById("porcentaje-descuento").value;
        porcentajeDescuento = porcentajeDescuento ? porcentajeDescuento : 0;
		var resultado = document.getElementById("resultado");
		resultado.textContent = calcularPrecioFinal(cantidad, precio, porcentajeDescuento);
	});
    
    descuento.addEventListener("change", function () {
        var porcentajeDescuento = document.getElementById("contenedor-descuento"); 
        if (this.checked) {
            porcentajeDescuento.classList.remove("hidden");
        } else {
            porcentajeDescuento.classList.add("hidden");
        }
    })
}();