import { db } from './firebase';
import { getDocs, query, collection, where } from 'firebase/firestore';

export const queryContainer = (id, setItemList, setLoading) => {
  const collectionDb = collection(db, 'productos');

  if (id) {
    const consult = query(collectionDb, where('category', '==', id));

    getDocs(consult)
      .then((result) => {
        const docs = result.docs;
        const productList = docs.map((doc) => {
          const id = doc.id;
          const data = doc.data();
          return { id, ...data };
        });
        setItemList(productList);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    getDocs(collectionDb)
      .then((result) => {
        const docs = result.docs;
        const productList = docs.map((doc) => {
          const id = doc.id;
          const data = doc.data();
          return { id, ...data };
        });
        setItemList(productList);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
