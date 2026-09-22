import { useEffect, useState } from 'react'
import { getProducts } from '../mock/asyncMock'
import ItemList from './ItemList'
import './ItemListContainer.css'

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      const products = await getProducts()
      setItems(products)
    }

    loadProducts()
  }, [])

  return (
    <main>
      <section className="item-list-container">
        <h1>{greeting}</h1>
      </section>
      <ItemList items={items} />
    </main>
  )
}

export default ItemListContainer
