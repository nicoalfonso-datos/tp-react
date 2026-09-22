import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import ItemCount from './ItemCount'
import './ItemDetail.css'

function ItemDetail({ product }) {
  const { addItem, isInCart } = useCart()

  return (
    <article className="item-detail">
      <img src={product.image} alt={product.name} />
      <div className="item-detail-info">
        <p className="item-detail-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="item-detail-price">${product.price}</p>
        <p>{product.description}</p>
        <p>Stock disponible: {product.stock}</p>
        <ItemCount
          stock={product.stock}
          onAdd={(quantity) => addItem(product, quantity)}
        />
        {isInCart(product.id) && (
          <Link className="item-detail-cart-link" to="/cart">
            Terminar mi compra
          </Link>
        )}
      </div>
    </article>
  )
}

export default ItemDetail
