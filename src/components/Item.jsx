import './Item.css'

function Item({ product }) {
  return (
    <article className="item-card">
      <img src={product.image} alt={product.title} />
      <div className="item-card-info">
        <h2>{product.title}</h2>
        <p className="item-card-category">{product.category}</p>
        <p className="item-card-price">${product.price}</p>
      </div>
    </article>
  )
}

export default Item
