# 📌 PreEntrega1-Scharff

### Consigna

- Crea un componente CartWidget con un ícono y una notificación mostrando un número hardcodeado (fijo). Este servirá luego para indicar la cantidad de elementos que tenemos en el carrito, pero por ahora, mostrará un número hardcodeado (colocado en el código). Ubica este componente (CartWidget) dentro de Navbar.. Agrega algunos estilos con Tailwind, Materialize u otro.
- Crea un componente contenedor ItemListContainer.js con una prop greeting, y muestra el mensaje dentro del contenedor con el styling integrado.

### Objetivo

- Crear la landing de tu proyecto.

### Se debe entregar.

- Crea un componente **CartWidget.js** que haga rendering de un ícono Cart, e inclúyelo dentro de NavBar.js para que esté visible en todo momento.
- Crea un componente **ItemListContainer**. Impórtalo dentro de App.js, y abajo de NavBar.js.

# 📌 Segunda pre-entrega

### Consigna

- Configura en App.js el routing usando un BrowserRouter de tu aplicación con react-router-dom
- Componentes:
  - Navbar con cart
  - Catálogo
  - Detalle de producto

### Objetivos.

- Deberás desarrollar la navegabilidad básica de la aplicación, demostrando que la app permite ver el catálogo, y navegar a un detalle.

### Se debe entregar.

- Rutas a configurar

  - ‘/’ navega a <ItemListContainer />
  - ‘/category/:id’ <ItemListContainer />
  - ‘/item/:id’ navega a <ItemDetailContainer />

- Links a configurar
  - Clickear en el brand debe navegar a ‘/’
  - Clickear un Item.js debe navegar a /item/:id
  - Clickear en una categoría del navbar debe navegar a /category/:categoryId

Para finalizar deberá integrar los parámetros de tus async-mocks para reaccionar a :itemId y :categoryId ¡utilizando efectos y los hooks de parámetros que vimos en clase! Si te encuentras en una categoría deberías poder detectar la navegación a otra categoría y volver a cargar los productos que correspondan a dicha categoría.

> 🗒️Notas:
>
> - No usar HashRouter como en el ejemplo del gif (usar BrowserRouter)
> - Utilizar el id de la categoría como nombre en la URL param en vez de números (vehículos, por ej)
> - Utilizar el id del item como URL param
