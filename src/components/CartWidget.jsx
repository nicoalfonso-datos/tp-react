import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './CartWidget.css'

function CartWidget() {
  const { totalItems } = useCart()

  return (
    <Link className="cart-widget" to="/cart" aria-label="Ir al carrito">
      <span className="cart-widget-icon">🛒</span>
      <span className="cart-widget-cantidad">{totalItems}</span>
    </Link>
  )
}

export default CartWidget
