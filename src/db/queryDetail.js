import { db } from './firebase';
import { doc, getDoc, collection } from 'firebase/firestore';

export const queryDetail = (id, setProduct, setLoading) => {
  // Acceso a la colección
  const collectionDb = collection(db, 'productos');

  // Acceso a un documento
  const consult = doc(collectionDb, id);
  getDoc(consult)
    .then((result) => {
      // Se obtienen los datos del documento
      const id = result.id;
      const data = result.data();
      // Se crea un objeto nuevo con el id y los datos del documento
      const product = { id, ...data };
      setProduct(product);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
};
