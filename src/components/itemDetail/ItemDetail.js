import ItemCount from './ItemCount';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const ItemDetail = ({ product }) => {
  const addCart = (quantity) => {
    console.log(`Cantidad de productos en el carrito: ${quantity}`);
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
      </Paper>
      <ItemCount initial={1} addCart={addCart} />
    </article>
  );
};

export default ItemDetail;
