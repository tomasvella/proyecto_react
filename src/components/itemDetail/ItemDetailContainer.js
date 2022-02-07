import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { queryDetail } from '../../db/queryDetail';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    queryDetail(id, setProduct, setLoading);
  }, [id]);

  return loading ? (
    <Box
      sx={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress color='inherit' />
    </Box>
  ) : (
    <ItemDetail product={product} />
  );
};

export default ItemDetailContainer;
