import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
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
  const sellings = collection(db, 'ventas');
  const products = collection(db, 'productos');
  addDoc(sellings, {
    buyer: userData,
    products: cartItems,
    total: totalPrice,
    createdAt: serverTimestamp(),
  })
    .then(() => {
      cartItems.forEach((item) => {
        let consult = doc(products, item.id);
        updateDoc(consult, { stock: item.stock - item.count });
      });
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
