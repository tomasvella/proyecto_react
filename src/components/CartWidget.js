import { useCustomContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../css/cartwidget.css';
import '../css/buttons.css';

const CartWidget = () => {
  const { cartItems, removeOneFromCart, clearCart, totalQuantity, totalPrice } =
    useCustomContext();
  return (
    <div className='cart-container'>
      <div className='cart-widget'>
        {cartItems.length > 0 ? (
          <div>
            <p className='cart-count'> Productos Totales: {totalQuantity}</p>
            <p className='cart-total'> Total a pagar: ${totalPrice}</p>
            <button className='button' onClick={clearCart}>
              Vaciar Carrito
            </button>
          </div>
        ) : null}
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => {
              return (
                <div key={item.id}>
                  <div className='cart-item'>
                    <img src={item.image} alt={item.title} />
                    <div>
                      <h3>{item.title}</h3>
                      <p>Precio: ${item.price}</p>
                      <p>Cantidad: {item.count}</p>
                    </div>
                    <button
                      className='button'
                      onClick={() => removeOneFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              );
            })}
          </ul>
        ) : (
          <p className='empty-cart'>
            No hay productos agregados al carrito.
            <Link to='/' className='links'>
              Ver productos
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default CartWidget;
