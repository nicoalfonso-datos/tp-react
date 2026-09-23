import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import { createOrder } from '../services/createOrder'
import { getFirebaseErrorMessage } from '../services/getFirebaseErrorMessage'
import './Checkout.css'

function Checkout() {
  const { user } = useAuth()
  const { cart, clear } = useCart()
  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    notes: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [orderId, setOrderId] = useState('')

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  function handleChange(event) {
    const { name, value } = event.target
    setBuyer({ ...buyer, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')

    if (!user) {
      setError('Iniciá sesión antes de confirmar la compra.')
      return
    }

    if (cart.length === 0) {
      setError('El carrito está vacío.')
      return
    }

    if ([buyer.name, buyer.phone, buyer.address, buyer.city].some((value) => !value.trim())) {
      setError('Completá todos los campos obligatorios.')
      return
    }

    setLoading(true)

    try {
      const order = await createOrder(user, buyer, cart, total)
      setOrderId(order.id)
      clear()
    } catch (error) {
      setError(getFirebaseErrorMessage(error))
    } finally {
      setLoading(false)
    }
  }

  if (orderId) {
    return (
      <main className="checkout-page">
        <section className="checkout-confirmation">
          <h1>¡Compra registrada!</h1>
          <p>Tu número de orden es:</p>
          <strong>{orderId}</strong>
          <p>Guardá este código para consultar tu compra.</p>
          <Link to="/">Volver al catálogo</Link>
        </section>
      </main>
    )
  }

  if (cart.length === 0) {
    return <Navigate to="/cart" replace />
  }

  return (
    <main className="checkout-page">
      <h1>Finalizar compra</h1>
      <section className="checkout-summary">
        <h2>Resumen de compra</h2>
        {cart.map((item) => (
          <p key={item.id}>
            {item.name} — {item.quantity} x ${item.price}
          </p>
        ))}
        <strong>Total: ${total}</strong>
      </section>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Datos de entrega</h2>
        <label>
          Nombre y apellido
          <input name="name" value={buyer.name} onChange={handleChange} required />
        </label>
        <label>
          Teléfono
          <input name="phone" type="tel" value={buyer.phone} onChange={handleChange} required />
        </label>
        <label>
          Dirección
          <input name="address" value={buyer.address} onChange={handleChange} required />
        </label>
        <label>
          Ciudad
          <input name="city" value={buyer.city} onChange={handleChange} required />
        </label>
        <label>
          Información adicional (opcional)
          <textarea name="notes" value={buyer.notes} onChange={handleChange} rows="3" />
        </label>
        {error && <p className="checkout-error">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Registrando compra...' : 'Confirmar compra'}
        </button>
      </form>
    </main>
  )
}

export default Checkout
