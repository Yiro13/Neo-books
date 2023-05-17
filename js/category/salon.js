// Obtener la referencia al contenedor de productos
const productContainer = document.getElementById('product-container');

// Hacer una llamada a la API para obtener los datos en formato JSON
fetch('https://api-bazar-x1zz.onrender.com/api/productos/consultar-categoria?categoria_id=7')
  .then(response => response.json())
  .then(data => {
    // Iterar sobre los productos obtenidos
    data.forEach(product => {
      // Crear elementos HTML para cada producto
      const productDiv = document.createElement('div');
      productDiv.className = 'col-sm-4';
      productDiv.innerHTML = `
        <div class="product-image-wrapper">
          <div class="single-products">
            <div class="productinfo text-center">
              <img src="${product.imagen_url}" alt="" />
              <h2>$${product.precio}</h2>
              <p>${product.nombre}</p>
              <p>${product.descripcion}</p>
              <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Agregar al carrito</a>
            </div>
            <div class="product-overlay">
              <div class="overlay-content">
                <h2>${product.nombre}</h2>
                <p>${product.descripcion}</p>
                <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Agregar al carrito</a>
              </div>
            </div>
          </div>
        </div>
      `;

      // Agregar el producto al contenedor
      productContainer.appendChild(productDiv);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
