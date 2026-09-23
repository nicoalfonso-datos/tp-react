import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/config'

export async function createOrder(user, buyer, cart, total) {
  if (!db) {
    throw new Error('Firebase no está configurado. Completá las variables del archivo .env.')
  }

  if (!user) {
    throw new Error('Iniciá sesión para confirmar la compra.')
  }

  const products = cart.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    quantity: item.quantity
  }))

  return addDoc(collection(db, 'orders'), {
    userId: user.uid,
    userEmail: user.email,
    buyer,
    products,
    total,
    createdAt: serverTimestamp()
  })
}
