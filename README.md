# Musical Store 2.0

Tienda de instrumentos musicales desarrollada como proyecto por etapas para el curso de React de Coderhouse. En la Unidad 7, el catálogo y las órdenes se conectan con Firebase; el inicio de sesión y el registro usan Firebase Authentication.

## Tecnologías

- React 19
- Vite
- React Router
- Firebase Authentication
- Cloud Firestore

## Instalación y ejecución

1. Instalar las dependencias:

   ```bash
   npm install
   ```

2. Copiar `.env.example` como `.env` y completar los valores de configuración de la aplicación web de Firebase.
3. Iniciar la aplicación:

   ```bash
   npm run dev
   ```

Para generar la versión de producción se puede ejecutar `npm run build`.

## Variables de entorno

El archivo `.env` debe estar en la raíz del proyecto. Vite expone al navegador las variables que comienzan con `VITE_`, por eso este archivo solo debe contener la configuración pública de la aplicación web de Firebase. No se deben agregar claves privadas ni credenciales de administrador.

Se necesitan estas variables:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

`.env` está excluido de Git. El archivo `.env.example` se incluye como plantilla sin valores.

## Configuración de Firebase

1. Crear un proyecto en Firebase y registrar una aplicación web.
2. En Authentication, habilitar el proveedor **Correo electrónico/contraseña**.
3. Crear la base de datos de Cloud Firestore.
4. Copiar los valores de configuración de la aplicación web al archivo local `.env`.
5. Publicar las reglas incluidas en `firestore.rules` en Firestore Rules.
6. Crear los documentos de productos descritos abajo.

La configuración central está en `src/firebase/config.js`, que exporta las instancias `auth` y `db`. El archivo no contiene datos de configuración escritos directamente en el código.

## Colecciones de Firestore

### `products`

Cada documento representa un producto. El ID del documento se usa como identificador del producto en las rutas y en el carrito. Campos requeridos:

```json
{
  "name": "Guitarra eléctrica",
  "category": "Guitarras",
  "price": 320000,
  "image": "https://ejemplo.com/guitarra.jpg",
  "description": "Guitarra eléctrica ideal para ensayos y shows en vivo.",
  "stock": 6
}
```

Las categorías deben coincidir con los nombres usados por la tienda: `Guitarras`, `Bajos`, `Baterías` y `Teclados`. La página principal consulta todos los productos; las rutas de categoría consultan Firestore por categoría. El detalle obtiene un documento por su ID.

### `orders`

Al completar una compra se crea un documento con el ID generado por Firestore. Incluye `userId`, `userEmail`, los datos de entrega en `buyer`, los productos comprados con sus IDs, nombres, precios y cantidades, el total y `createdAt` (fecha del servidor). El carrito se vacía únicamente después de que Firestore confirma la creación.

Las reglas de `firestore.rules` permiten leer productos, impiden modificarlos desde la aplicación y permiten crear una orden solo a un usuario autenticado para su propio `userId`. Para aplicar las reglas, copiarlas en la sección Firestore Rules de Firebase Console y publicarlas.

## Estructura principal

- `src/firebase/config.js`: inicialización central de Firebase, Firestore y Authentication.
- `src/context/AuthContext.jsx`: usuario, estado de sesión y acciones de autenticación.
- `src/context/CartContext.jsx`: estado y acciones del carrito.
- `src/services/getProducts.js`: listado general y consulta filtrada por categoría.
- `src/services/getProductById.js`: consulta de producto por ID.
- `src/services/createOrder.js`: creación de órdenes en Firestore.
- `src/components`: navegación, catálogo, detalle, formularios de acceso, carrito y checkout.

Si Firebase todavía no está configurado, el catálogo y los formularios muestran un mensaje en la aplicación; para probar autenticación, catálogo y checkout hace falta completar los pasos anteriores.
