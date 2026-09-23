import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

export async function getProductById(productId) {
  if (!db) {
    throw new Error('Firebase no está configurado. Completá las variables del archivo .env.')
  }

  const productReference = doc(db, 'products', productId)
  const productDocument = await getDoc(productReference)

  if (!productDocument.exists()) {
    throw new Error('Producto no encontrado.')
  }

  return { ...productDocument.data(), id: productDocument.id }
}
