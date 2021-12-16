import ItemCount from './ItemCount';

const Item = (item) => {
  return (
    <article>
      <h1>{item.title}</h1>
      <img src={item.image} alt='logo' className='product-logo' />
      <p>Precio: ${item.price} </p>
      <ItemCount initial={1} />
      <button>Detalles</button>
    </article>
  );
};

export default Item;
