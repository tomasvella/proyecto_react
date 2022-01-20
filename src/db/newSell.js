import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import { toast } from 'react-toastify';

export const newSell = (
  e,
  userData,
  cartItems,
  totalPrice,
  clearCart,
  handleClose
) => {
  e.preventDefault();
  console.log(userData);
  const sellings = collection(db, 'ventas');
  addDoc(sellings, {
    buyer: userData,
    products: cartItems,
    total: totalPrice,
    createdAt: serverTimestamp(),
  })
    .then(() => {
      toast.success('Compra realizada con éxito.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .then(() => {
      clearCart();
    });
  handleClose();
};
