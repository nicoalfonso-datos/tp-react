import { useState } from 'react'
import './ItemCount.css'

function ItemCount({ stock, onAdd }) {
  const [quantity, setQuantity] = useState(0)

  function decreaseQuantity() {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  function increaseQuantity() {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  return (
    <div className="item-count">
      <p>Cantidad: {quantity}</p>
      <div className="item-count-buttons">
        <button onClick={decreaseQuantity} disabled={quantity === 0}>
          -
        </button>
        <button onClick={increaseQuantity} disabled={quantity === stock}>
          +
        </button>
      </div>
      <button
        className="item-count-add"
        onClick={() => onAdd(quantity)}
        disabled={quantity === 0}
      >
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount
