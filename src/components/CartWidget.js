import { useCustomContext } from './context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { newSell } from '../db/newSell';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ToastContainer } from 'react-toastify';
import '../css/cartwidget.css';
import '../css/buttons.css';
import '../css/cartitems.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CartWidget = () => {
  const { cartItems, removeOneFromCart, clearCart, totalQuantity, totalPrice } =
    useCustomContext();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');

  const nameCapture = (e) => {
    setName(e.target.value);
  };

  const mailCapture = (e) => {
    setMail(e.target.value);
  };

  const phoneCapture = (e) => {
    setPhone(e.target.value);
  };

  const userData = {
    name,
    mail,
    phone,
  };

  return (
    <div className='cart-container'>
      <div className='cart-widget'>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => {
              return (
                <div key={item.id} className='cart-item-container'>
                  <div className='cart-item'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='cart-item-img'
                    />
                    <div>
                      <h3>{item.title}</h3>
                      <p>Precio: ${item.price}</p>
                      <p>Cantidad: {item.count}</p>
                    </div>
                    <button
                      className='button'
                      onClick={() => removeOneFromCart(item.id)}
                    >
                      Eliminar 1
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
        {cartItems.length > 0 ? (
          <div className='cart-total-container'>
            <p className='cart-count'> Productos Totales: {totalQuantity}</p>
            <p className='cart-total'> Total a pagar: ${totalPrice}</p>
            <button className='button' onClick={handleOpen}>
              Finalizar Compra
            </button>
            <Modal
              aria-labelledby='transition-modal-title'
              aria-describedby='transition-modal-description'
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <Typography
                    id='modal-modal-title'
                    variant='h6'
                    component='h2'
                  >
                    Ingresá tus datos
                  </Typography>
                  <form
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2vh',
                    }}
                  >
                    <Typography
                      id='modal-modal-description'
                      sx={{ mt: 5, mb: 4 }}
                    >
                      <label htmlFor='name'>Nombre y apellido:</label>
                      <input
                        type='text'
                        onChange={nameCapture}
                        style={{ width: '100%' }}
                      />{' '}
                      <br />
                      <label htmlFor='phone'>Telefono:</label>
                      <input
                        type='number'
                        onChange={phoneCapture}
                        style={{ width: '100%' }}
                      />{' '}
                      <br />
                      <label htmlFor='email'>Correo:</label>
                      <input
                        type='email'
                        onChange={mailCapture}
                        style={{ width: '100%' }}
                      />
                    </Typography>
                    <button
                      className='button'
                      onClick={(e) =>
                        newSell(
                          e,
                          userData,
                          cartItems,
                          totalPrice,
                          clearCart,
                          handleClose
                        )
                      }
                    >
                      Enviar
                    </button>
                  </form>
                </Box>
              </Fade>
            </Modal>
            <button className='button' onClick={clearCart}>
              Vaciar Carrito
            </button>
          </div>
        ) : null}
        <ToastContainer
          position='bottom-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default CartWidget;
