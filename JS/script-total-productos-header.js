function mostrarTotalProductosHeader()
{
    let cantidadTotalTodos = 0;

    var carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.forEach(producto => {
        cantidadTotalTodos += producto.cantidad;
    })

    const carrito_header = `
        Carrito (${cantidadTotalTodos})
        `;

    const contenedor = document.getElementById("carrito-header");

    contenedor.innerHTML = carrito_header;
}

mostrarTotalProductosHeader();