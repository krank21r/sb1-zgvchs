import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { RspWork, IrspWork } from '../types/work';

export const addRspWork = async (work: Omit<RspWork, 'createdAt' | 'updatedAt'>) => {
  const collectionRef = collection(db, 'rspWorks');
  return addDoc(collectionRef, {
    ...work,
    createdAt: new Date(),
    updatedAt: new Date()
  });
};

export const addIrspWork = async (work: Omit<IrspWork, 'createdAt' | 'updatedAt'>) => {
  const collectionRef = collection(db, 'irspWorks');
  return addDoc(collectionRef, {
    ...work,
    createdAt: new Date(),
    updatedAt: new Date()
  });
};

export const getRspWorks = async (): Promise<RspWork[]> => {
  const q = query(collection(db, 'rspWorks'), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as RspWork));
};

export const getIrspWorks = async (): Promise<IrspWork[]> => {
  const q = query(collection(db, 'irspWorks'), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as IrspWork));
};