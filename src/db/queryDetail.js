import { db } from './firebase';
import { doc, getDoc, collection } from 'firebase/firestore';

export const queryDetail = (id, setProduct, setLoading) => {
  const collectionDb = collection(db, 'productos');

  const consult = doc(collectionDb, id);
  getDoc(consult)
    .then((result) => {
      const id = result.id;
      const data = result.data();
      const product = { id, ...data };
      setProduct(product);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
};
