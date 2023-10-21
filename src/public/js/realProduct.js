// Obtener el formulario de agregar producto por su ID
const addProductForm = document.getElementById('addProductForm');

// Escuchar el evento de envío del formulario
addProductForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenir el envío del formulario por defecto

  // Obtener los valores del formulario
  const title = document.getElementById('title').value;
  const price = document.getElementById('price').value;
  const stock = document.getElementById('stock').value;

  // Crear un objeto con los datos del nuevo producto
  const newProduct = {
    title: title,
    price: price,
    stock: stock
  };

  // Aquí puedes realizar una solicitud HTTP para enviar los datos del nuevo producto al servidor
  // Puedes usar fetch, axios u otra librería para realizar la solicitud

  // Ejemplo de solicitud POST usando fetch
  fetch('/api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newProduct)
  })
    .then((response) => response.json())
    .then((data) => {
      // Aquí puedes manejar la respuesta del servidor después de agregar el producto exitosamente
      console.log('Producto agregado:', data);
      // Por ejemplo, podrías mostrar un mensaje de éxito o actualizar la lista de productos en la vista
    })
    .catch((error) => {
      // Aquí puedes manejar cualquier error que ocurra durante la solicitud
      console.error('Error al agregar el producto:', error);
      // Por ejemplo, podrías mostrar un mensaje de error al usuario
    });

  // Limpiar los campos del formulario después de enviar los datos
  addProductForm.reset();
});