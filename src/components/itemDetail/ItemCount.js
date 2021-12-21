import { useState } from 'react';
import CardActions from '@material-ui/core/CardActions';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../css/buttons.css';

const ItemCount = ({ stock, initial, addCart }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    setCount(initial);
    addCart(count);
    toast.success('Producto agregado al carrito.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className='product-detail'>
      <p>Cantidad a comprar: {count}.</p>
      <CardActions>
        <Button onClick={increment} size='small'>
          +
        </Button>
        <Button onClick={decrement} size='small'>
          -
        </Button>
        <Button onClick={addToCart} size='small'>
          Agregar al carrito
        </Button>
      </CardActions>
      <ToastContainer
        position='top-right'
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
  );
};

export default ItemCount;
