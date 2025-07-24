
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from './firebase';

export interface OrderData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  paymentMethod: string;
  items: {
    name: string;
    price: number;
    quantity: number;
  }[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: string;
  createdAt: Timestamp;
}

export const saveOrder = async (orderData: Omit<OrderData, 'createdAt'>) => {
  try {
    const orderWithTimestamp = {
      ...orderData,
      createdAt: Timestamp.now()
    };
    
    const docRef = await addDoc(collection(db, 'orders'), orderWithTimestamp);
    return { success: true, orderId: docRef.id };
  } catch (error) {
    console.error('Error saving order:', error);
    return { success: false, error: error };
  }
};
