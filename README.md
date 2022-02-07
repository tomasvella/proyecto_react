# Proyecto E-Commerce en React Js

Desarrollo de una tienda online que la cual se conecta a una base de datos que permite generar ordenes de compra con captura de datos del cliente, y además el manejo de stock de productos, de forma que se vaya actualizando a medida que se generan nuevas órdenes.

---

### Paquetes utilizados.

> - [React Router DOM](https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md)
> - [Firebase](https://firebase.google.com/?hl=es)
> - [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)
> - [Material UI](https://mui.com/)

---

### Incialización del proyecto

Descargar una copia del repositorio, abrir una terminal dentro de la carpeta del proyecto y ejectuar:

```nodejs
npm install
```

Esto hará que se descarguen las librerias mencionadas para poder correr el proyecto de forma local.

Una vez instalado ejecutar:

```nodejs
npm start
```

La consola levantará el proyecto y nos indicará bajo que dominio se encuentra, inicialmente debería ser [http://localhost:3000](http://localhost:3000)

---

### Demostración de uso del sitio:

El sitio se alimenta de una base de datos que se conecta a través de Firebase (Firestore), lo que permite mostrar los prodctos que se quieren comercializar, utilizando useEffect y useState. Además también se pueden filtrar por categoría desde el menu superior. Cada producto también tiene un ID único el cual permite acceder a través de un link, capturado a través de useParams.

![home](https://i.ibb.co/QdZx5fJ/inicio.png)
![electronics](https://i.ibb.co/VJ5N7Wm/electronics.png)
![jewelery](https://i.ibb.co/rZtqhqp/jewelery.png)

Al ingresar al un producto podemos ver su descripción y la aparición de botones que permiten sumar la cantidad de productos que se desee agregar al carrito y por consecuencia la adición. Una vez agregado se habilita un nuevo boton que nos permite finalizar la compra redirigiéndonos directamente al carrito (el cual también se actualiza con la cantidad de prodcutos agregados según el tipo, por ejemplo si se agregan 2 monitores en el widget del carrito solamente va a figurar 1 solo tipo de producto).

![product1](https://i.ibb.co/6FTmcg4/oneprodcart.png)
![product2](https://i.ibb.co/9c662Mv/twoprodscart.png)

Cuando nos dirigimos al carrito vamos a poder visualizar la cantidad de tipo de productos seleccionados con sus respectivas cantidades a comprar. También contamos con un botón que permite ir elimiando de a uno el producto hasta llegar a 0, que desaparece, o bien utilizar el botón `Vaciar Carrito` para borrar todos los productos.
También se puede ver la cantidad total de productos por cantidad y el monto total a abonar, con su correspondiente boón de `Finalizar Compra`.

![cart](https://i.ibb.co/5YFpL0y/cartcheckout.png)
![cartform](https://i.ibb.co/5KgkWF6/cartform.png)
![buyok](https://i.ibb.co/XsSX1Zf/buyok.png)

Una vez finalizada la compra se puede corroborar que el stock fue actualizado:

![newstock1](https://i.ibb.co/Wv0pHvq/newstock.png)
![newstock2](https://i.ibb.co/2cGfZs9/newstock2.png)
