import { db } from './firebase';
import { getDocs, query, collection, where } from 'firebase/firestore';

export const queryContainer = (id, setItemList, setLoading) => {
  // Acceso a la colección
  const collectionDb = collection(db, 'productos');

  if (id) {
    // Ejecución del query para obtener una categoría en específico
    const consult = query(collectionDb, where('category', '==', id));
    // Acceso a un documento
    getDocs(consult)
      .then((result) => {
        // Resultado de la consulta
        const docs = result.docs;
        // Formato de los datos obtenidos de la consulta, que devolverá un array de objetos
        const productList = docs.map((doc) => {
          // Se obtiene el id del documento
          const id = doc.id;
          // Se obtienen los datos del documento
          const data = doc.data();
          // Se crea un objeto nuevo con el id y los datos del documento
          return { id, ...data };
        });
        setItemList(productList);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    // Acceso a un documento
    getDocs(collectionDb)
      .then((result) => {
        // Resultado de la consulta
        const docs = result.docs;
        // Formato de los datos obtenidos de la consulta, que devolverá un array de objetos
        const productList = docs.map((doc) => {
          // Se obtiene el id del documento
          const id = doc.id;
          // Se obtienen los datos del documento
          const data = doc.data();
          // Se crea un objeto nuevo con el id y los datos del documento
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
