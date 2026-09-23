import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Cart.css'

function Cart() {
  const { cart, removeItem, clear } = useCart()
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <main className="cart-page">
      <h1>Mi carrito</h1>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Tu carrito está vacío. ¡Encontrá tu próximo instrumento!</p>
          <Link to="/">Volver al catálogo</Link>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li className="cart-item" key={item.id}>
                <div>
                  <h2>{item.name}</h2>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio unitario: ${item.price}</p>
                  <p>Subtotal: ${item.price * item.quantity}</p>
                </div>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <p className="cart-total">Total: ${total}</p>
          <div className="cart-actions">
            <button onClick={clear}>Vaciar carrito</button>
            <Link className="cart-checkout-button" to="/checkout">
              Finalizar compra
            </Link>
            <Link to="/">Seguir comprando</Link>
          </div>
        </>
      )}
    </main>
  )
}

export default Cart
