import { useState } from 'react'
import './SearchBar.css'

function SearchBar({ onSearch, resultsCount, searchTerm }) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="search-section">
      <div className="search-container">
        <div className={`search-input-wrapper ${isFocused ? 'focused' : ''}`}>
          <div className="search-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="search-input"
          />
          {searchTerm && (
            <button 
              className="clear-button"
              onClick={() => onSearch('')}
              aria-label="Clear search"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>
        
        {searchTerm && (
          <div className="search-results">
            <span className="results-text">
              {resultsCount === 0 ? 'No products found' : 
               resultsCount === 1 ? '1 product found' : 
               `${resultsCount} products found`}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchBar