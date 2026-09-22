# Musical Store 2.0

Tienda online de instrumentos musicales. En esta unidad se agregan los primeros componentes del layout.

En la Unidad 3 se suma un catálogo que carga productos desde una promesa local, simulando una espera de dos segundos.

En la Unidad 4 se agrega el detalle de un producto. `getProductById` busca por identificador con una promesa, `ItemDetailContainer` administra la carga y `ItemDetail` muestra la información completa. Dentro del detalle se reutiliza `ItemCount`, que controla la cantidad según el stock del producto.

En la Unidad 5 se incorpora `react-router-dom` para navegar entre el inicio, las categorías y el detalle de cada producto. El Navbar y el Footer se mantienen visibles con un layout compartido. También se agrega una ruta 404 y un ejemplo de ruta protegida para `/checkout`.

En la Unidad 6 se agrega un contexto global para el carrito. Los productos se pueden agregar desde el detalle, ver en `/cart`, eliminar individualmente o quitar todos juntos.

## Componentes

- `Navbar`: muestra el nombre de la tienda, las categorías de instrumentos y el carrito.
- `CartWidget`: enlaza con el carrito y muestra la cantidad total de unidades agregadas.
- `ItemListContainer`: muestra el mensaje de bienvenida que recibe mediante la prop `greeting`.
- `ItemList`: recorre los productos recibidos y renderiza una card por producto.
- `Item`: presenta la imagen, el nombre, la categoría y el precio de un producto.
- `ItemDetailContainer`: solicita un producto por su id y muestra el estado de carga.
- `ItemDetail`: presenta la imagen, el nombre, la categoría, la descripción, el precio y el stock.
- `ItemCount`: permite aumentar o disminuir la cantidad sin superar el stock ni bajar de cero.
- `AppLayout`: mantiene el Navbar y el Footer alrededor de las distintas páginas.
- `NotFound`: muestra un mensaje para las rutas inexistentes.
- `PrivateRoute`: simula el acceso restringido a `/checkout` hasta que se agregue autenticación.
- `CartProvider`: comparte el estado y las acciones del carrito en toda la aplicación.
- `Cart`: muestra los productos agregados, sus subtotales y el total de la compra.

Los datos de prueba están en `src/mock/asyncMock.js`. `getProducts` devuelve una promesa que se resuelve después de dos segundos. `ItemListContainer` obtiene los datos con `useEffect`, los guarda en el estado `items` con `useState` y los pasa a `ItemList`.

La búsqueda por id está en `src/services/getProductById.js` y simula una demora de medio segundo. En la Unidad 5, `ItemDetailContainer` obtiene el identificador desde `/item/:id` y vuelve a consultar el producto cuando cambia.

Las categorías están disponibles en `/category/guitarras`, `/category/bajos`, `/category/baterias` y `/category/teclados`. Los productos enlazan a `/item/:id`; la página de inicio muestra todos los productos.

El `CartWidget` muestra la cantidad total de unidades agregadas. El carrito se conserva al navegar entre rutas y permanece en memoria mientras la aplicación está abierta.

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
