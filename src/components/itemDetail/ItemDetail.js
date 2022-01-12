import ItemCount from './ItemCount';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { toast } from 'react-toastify';
import { useCustomContext } from '../context/CartContext';
import 'react-toastify/dist/ReactToastify.css';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '75%',
  maxHeight: '75%',
});

const ItemDetail = ({ product }) => {
  const [isProductAdded, setIsProductAdded] = useState(false);
  const { addToCart } = useCustomContext();

  const onAdd = (count) => {
    addToCart(count, product);
    setIsProductAdded(true);
    console.log(`Cantidad de productos en el carrito: ${count}`);
    toast.success('Producto agregado al carrito.', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <article className='product'>
      <h1>Detalle del producto</h1>
      <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt={product.title} src={product.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1' component='div'>
                  {product.title}
                </Typography>
                <Typography variant='body2' gutterBottom>
                  {product.description}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  ID: {product.id}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant='subtitle1' component='div'>
                {`$${product.price}`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <ItemCount onAdd={onAdd} isProductAdded={isProductAdded} />
      </Paper>
    </article>
  );
};

export default ItemDetail;
