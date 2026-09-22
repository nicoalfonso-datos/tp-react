import { useState } from 'react'
import './ItemCount.css'

function ItemCount({ stock }) {
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
    </div>
  )
}

export default ItemCount
