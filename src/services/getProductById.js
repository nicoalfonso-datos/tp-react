import { products } from '../mock/asyncMock.js'

export function getProductById(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((item) => item.id === productId)

      if (product) {
        resolve(product)
      } else {
        reject(new Error('Producto no encontrado'))
      }
    }, 500)
  })
}
