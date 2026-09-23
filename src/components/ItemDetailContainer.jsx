import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/getProductById'
import ItemDetail from './ItemDetail'
import './ItemDetailContainer.css'

function ItemDetailContainer() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProduct() {
      setProduct(null)
      setError('')
      setLoading(true)

      try {
        const productFound = await getProductById(id)
        setProduct(productFound)
      } catch (error) {
        setError(error.message || 'No se pudo cargar el producto.')
      } finally {
        setLoading(false)
      }
    }

    loadProduct()
  }, [id])

  return (
    <section className="item-detail-container">
      <h2>Detalle del producto</h2>
      {loading ? (
        <p className="item-detail-loading">Cargando detalle...</p>
      ) : error ? (
        <p>{error}</p>
      ) : product ? (
        <ItemDetail product={product} />
      ) : null}
    </section>
  )
}

export default ItemDetailContainer
