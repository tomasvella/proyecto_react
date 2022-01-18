import { useCustomContext } from '../components/context/CartContext';
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase';

const { cartItems, totalPrice } = useCustomContext();

export const newSell = (buyer, cartItems, totalPrice) => {
  const sellings = collection(db, 'ventas');
  addDoc(sellings, {
    buyer,
    productos: cartItems,
    createdAt: serverTimestamp(),
    total: totalPrice,
  });
};
