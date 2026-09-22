# Musical Store 2.0

Tienda online de instrumentos musicales. En esta unidad se agregan los primeros componentes del layout.

En la Unidad 3 se suma un catálogo que carga productos desde una promesa local, simulando una espera de dos segundos.

En la Unidad 4 se agrega el detalle de un producto. `getProductById` busca por identificador con una promesa, `ItemDetailContainer` administra la carga y `ItemDetail` muestra la información completa. Dentro del detalle se reutiliza `ItemCount`, que controla la cantidad según el stock del producto.

## Componentes

- `Navbar`: muestra el nombre de la tienda, las categorías de instrumentos y el carrito.
- `CartWidget`: muestra el ícono del carrito y una cantidad inicial fija.
- `ItemListContainer`: muestra el mensaje de bienvenida que recibe mediante la prop `greeting`.
- `ItemList`: recorre los productos recibidos y renderiza una card por producto.
- `Item`: presenta la imagen, el nombre, la categoría y el precio de un producto.
- `ItemDetailContainer`: solicita un producto por su id y muestra el estado de carga.
- `ItemDetail`: presenta la imagen, el nombre, la categoría, la descripción, el precio y el stock.
- `ItemCount`: permite aumentar o disminuir la cantidad sin superar el stock ni bajar de cero.

Los datos de prueba están en `src/mock/asyncMock.js`. `getProducts` devuelve una promesa que se resuelve después de dos segundos. `ItemListContainer` obtiene los datos con `useEffect`, los guarda en el estado `items` con `useState` y los pasa a `ItemList`.

La búsqueda por id está en `src/services/getProductById.js` y simula una demora de medio segundo. En esta unidad `ItemDetailContainer` solicita el producto de ejemplo y administra su estado mientras llega la respuesta.

## Tecnologías

- React 19
- Vite
- JavaScript

## Instalación y ejecución

1. Instalar las dependencias:

   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```
