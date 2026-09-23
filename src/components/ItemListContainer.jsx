import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../services/getProducts'
import ItemList from './ItemList'
import './ItemListContainer.css'

const categoryNames = {
  guitarras: 'Guitarras',
  bajos: 'Bajos',
  baterias: 'Baterías',
  teclados: 'Teclados'
}

function ItemListContainer({ greeting }) {
  const { id } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadProducts() {
      setLoading(true)
      setError('')

      const categoryName = categoryNames[id]
      if (id && !categoryName) {
        setItems([])
        setError('No existe esa categoría.')
        setLoading(false)
        return
      }

      try {
        const products = await getProducts(categoryName)
        setItems(products)
      } catch (error) {
        setError(error.message || 'No se pudieron cargar los productos.')
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [id])

  const categoryName = categoryNames[id]
  const pageTitle = id ? categoryName || 'Categoría no encontrada' : greeting

  return (
    <main>
      <section className="item-list-container">
        <h1>{pageTitle}</h1>
      </section>
      {loading ? (
        <p className="item-list-message">Cargando productos...</p>
      ) : error ? (
        <p className="item-list-message">{error}</p>
      ) : items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <p className="item-list-message">No hay productos en esta categoría.</p>
      )}
    </main>
  )
}

export default ItemListContainer
