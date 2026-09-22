import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../mock/asyncMock'
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

  useEffect(() => {
    const loadProducts = async () => {
      const products = await getProducts()
      setItems(products)
      setLoading(false)
    }

    loadProducts()
  }, [])

  const categoryName = categoryNames[id]
  const filteredItems = id
    ? items.filter((product) => product.category === categoryName)
    : items
  const pageTitle = id ? categoryName || 'Categoría no encontrada' : greeting

  return (
    <main>
      <section className="item-list-container">
        <h1>{pageTitle}</h1>
      </section>
      {loading ? (
        <p className="item-list-message">Cargando productos...</p>
      ) : filteredItems.length > 0 ? (
        <ItemList items={filteredItems} />
      ) : (
        <p className="item-list-message">No hay productos en esta categoría.</p>
      )}
    </main>
  )
}

export default ItemListContainer
