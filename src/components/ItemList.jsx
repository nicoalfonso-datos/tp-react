import Item from './Item'
import './ItemList.css'

function ItemList({ items }) {
  return (
    <section className="item-list">
      {items.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </section>
  )
}

export default ItemList
