import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'

export async function getProducts(category) {
  if (!db) {
    throw new Error('Firebase no está configurado. Completá las variables del archivo .env.')
  }

  const productsCollection = collection(db, 'products')
  const productsQuery = category
    ? query(productsCollection, where('category', '==', category))
    : productsCollection
  const snapshot = await getDocs(productsQuery)

  return snapshot.docs.map((productDocument) => ({
    ...productDocument.data(),
    id: productDocument.id
  }))
}
