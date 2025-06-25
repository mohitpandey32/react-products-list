import { useState, useEffect } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ProductGrid from './components/ProductGrid'
import { productsData } from './data/products'
import './App.css'

function App() {
  const [products] = useState(productsData)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(products)

  useEffect(() => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredProducts(filtered)
  }, [searchTerm, products])

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  return (
    <div className="app">
      <Header />
      <SearchBar 
        onSearch={handleSearch}
        searchTerm={searchTerm}
        resultsCount={filteredProducts.length}
      />
      <ProductGrid 
        products={filteredProducts}
        searchTerm={searchTerm}
      />
    </div>
  )
}

export default App