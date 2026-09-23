import { Link } from 'react-router-dom'
import './Item.css'

function Item({ product }) {
  return (
    <Link className="item-card-link" to={`/item/${product.id}`}>
      <article className="item-card">
        <img src={product.image} alt={product.name} />
        <div className="item-card-info">
          <h2>{product.name}</h2>
          <p className="item-card-category">{product.category}</p>
          <p className="item-card-price">${product.price}</p>
        </div>
      </article>
    </Link>
  )
}

export default Item
