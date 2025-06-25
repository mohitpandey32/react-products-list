import ProductCard from './ProductCard'
import './ProductGrid.css'

function ProductGrid({ products, searchTerm }) {
  if (products.length === 0) {
    return (
      <div className="no-results">
        <div className="no-results-icon">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="no-results-title">No products found</h3>
        <p className="no-results-text">
          {searchTerm ? 
            `We couldn't find any products matching "${searchTerm}". Try adjusting your search.` :
            'No products available at the moment.'
          }
        </p>
      </div>
    )
  }

  return (
    <div className="products-section">
      <div className="products-grid">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className="product-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid