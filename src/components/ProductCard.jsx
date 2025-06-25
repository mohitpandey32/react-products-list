import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <div className="product-badge">New</div>
        <div className="product-overlay">
          <button className="quick-view-btn">Quick View</button>
        </div>
      </div>
      
      <div className="product-content">
        <div className="product-category">Electronics</div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-footer">
          <div className="product-price">
            <span className="price-currency">$</span>
            <span className="price-amount">{product.price}</span>
          </div>
          
          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`star ${i < 4 ? 'filled' : ''}`}>★</span>
              ))}
            </div>
            <span className="rating-text">4.0</span>
          </div>
        </div>
        
        <button className="add-to-cart-btn">
          <span className="btn-text">Add to Cart</span>
          <span className="btn-icon">+</span>
        </button>
      </div>
    </div>
  )
}

export default ProductCard