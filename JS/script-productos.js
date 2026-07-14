function traerProductos()
{
    fetch('https://fakestoreapi.com/products/category/electronics')
    .then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
    })
    .then(data => {
    const contenedor = document.getElementById("contenedor-productos");
    data.forEach(producto => {
        const productoCard = `
            <div class="card-producto">
                <img class="imagen-producto" src="${producto.image}" alt="${producto.title}">
                <p class="f4">${producto.title}</p>
                <p class="f4"> Precio $${producto.price}</p>
                <button class="boton-agregar" onclick="agregarAlCarrito(${producto.id})">Añadir al carrito</button>
            </div>
            `;
        contenedor.innerHTML += productoCard;
    });
    })
    .catch(error => {
    console.error('Error en la comunicación con la API:', error);
    });
}

traerProductos();