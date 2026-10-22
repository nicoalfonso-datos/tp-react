import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import ItemCount from './ItemCount'
import './ItemDetail.css'

function ItemDetail({ product }) {
  const { addItem, cart, isInCart } = useCart()
  const itemInCart = cart.find((item) => item.id === product.id)
  const availableStock = Math.max(product.stock - (itemInCart?.quantity || 0), 0)

  return (
    <article className="item-detail">
      <img src={product.image} alt={product.name} />
      <div className="item-detail-info">
        <p className="item-detail-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="item-detail-price">${product.price}</p>
        <p>{product.description}</p>
        <p>Stock disponible: {availableStock}</p>
        <ItemCount
          stock={availableStock}
          onAdd={(quantity) => addItem(product, quantity)}
        />
        {availableStock === 0 && <p>Ya alcanzaste el stock disponible en el carrito.</p>}
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
