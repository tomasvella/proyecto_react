import CardActions from '@material-ui/core/CardActions';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../css/buttons.css';

const ItemCount = ({ stock, addToCart, count, setCount, isProductAdded }) => {
  const increment = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const decrement = (e) => {
    e.preventDefault();
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className='product-detail'>
      <p>Cantidad a comprar: {count}</p>
      <CardActions>
        <Button className='button' onClick={increment} size='small'>
          +
        </Button>
        <Button className='button' onClick={decrement} size='small'>
          -
        </Button>
        <Button className='button' onClick={addToCart} size='small'>
          Agregar al carrito
        </Button>
        <Link to='/cart'>
          {isProductAdded ? (
            <Button className='button' size='small'>
              Finalizar compra
            </Button>
          ) : null}
        </Link>
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
