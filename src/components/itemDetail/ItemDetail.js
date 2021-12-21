import ItemCount from './ItemCount';
import Item from '../itemList/Item';

const ItemDetail = ({ product }) => {
  const addCart = (quantity) => {
    console.log(`Cantidad de productos en el carrito: ${quantity}`);
  };

  return (
    <article className='product'>
      <h1>Detalle del producto</h1>
      <Item
        key={product.id}
        id={product.id}
        title={product.title}
        image={product.image}
        price={product.price}
        description={product.description}
      />
      <ItemCount initial={1} addCart={addCart} />
    </article>
  );
};

export default ItemDetail;
