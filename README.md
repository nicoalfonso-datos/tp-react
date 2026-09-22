# Musical Store 2.0

Tienda online de instrumentos musicales. En esta unidad se agregan los primeros componentes del layout.

En la Unidad 3 se suma un catálogo que carga productos desde una promesa local, simulando una espera de dos segundos.

## Componentes

- `Navbar`: muestra el nombre de la tienda, las categorías de instrumentos y el carrito.
- `CartWidget`: muestra el ícono del carrito y una cantidad inicial fija.
- `ItemListContainer`: muestra el mensaje de bienvenida que recibe mediante la prop `greeting`.
- `ItemList`: recorre los productos recibidos y renderiza una card por producto.
- `Item`: presenta la imagen, el nombre, la descripción y el precio de un producto.

Los datos de prueba están en `src/mock/asyncMock.js`. `getProducts` devuelve una promesa que se resuelve después de dos segundos. `ItemListContainer` obtiene los datos con `useEffect`, los guarda en el estado `items` con `useState` y los pasa a `ItemList`.

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
