import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/getProductById'
import ItemDetail from './ItemDetail'
import './ItemDetailContainer.css'

function ItemDetailContainer() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    setProduct(null)
    setError('')
    getProductById(Number(id))
      .then((productFound) => setProduct(productFound))
      .catch((error) => setError(error.message))
  }, [id])

  return (
    <section className="item-detail-container">
      <h2>Detalle del producto</h2>
      {error ? (
        <p>{error}</p>
      ) : product ? (
        <ItemDetail product={product} />
      ) : (
        <p className="item-detail-loading">Cargando detalle...</p>
      )}
    </section>
  )
}

export default ItemDetailContainer
