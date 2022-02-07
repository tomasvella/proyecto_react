import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB3Ie1byvmkON0dnE_tPX3JHGyRUEwmb5E',
  authDomain: 'proyecto-react-a7742.firebaseapp.com',
  projectId: 'proyecto-react-a7742',
  storageBucket: 'proyecto-react-a7742.appspot.com',
  messagingSenderId: '303362226289',
  appId: '1:303362226289:web:0035ae8eecc509811b03d0',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
