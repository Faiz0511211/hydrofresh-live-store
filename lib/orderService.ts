import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// This defines the structure of the data we will save.
export interface OrderData {
  name: string;
  email: string;
  phone: string;
  address: string;
  items: any[];
  total: number;
  status: string;
  createdAt: any; // Firestore will replace this with a server timestamp
}

// This function saves the order to the 'orders' collection in Firestore.
export const saveOrder = async (orderData: Omit<OrderData, 'createdAt'>) => {
  try {
    const docRef = await addDoc(collection(db, 'orders'), {
      ...orderData,
      createdAt: serverTimestamp(), // Use the server's timestamp
    });
    console.log('Order saved with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error saving order: ', error);
    throw new Error('Could not save order to database.');
  }
};
