# Premium Store - React Product List with Search Filter

A modern, responsive React application featuring a beautiful product catalog with real-time search functionality. Built with React hooks and styled with custom CSS for an exceptional user experience.

![Premium Store Preview](https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop)

## ✨ Features

- **🔍 Real-time Search**: Instant product filtering by name, description, or category
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🎨 Modern Design**: Clean, professional UI with gradient backgrounds and smooth animations
- **⚡ Fast Performance**: Built with React functional components and hooks
- **🛍️ Product Showcase**: Beautiful product cards with hover effects and detailed information
- **🎯 User-Friendly**: Intuitive search interface with clear results feedback

## 🚀 Live Demo

[View Live Demo](https://mohitpandey32.github.io/react-products-list/) *(Replace with your actual deployment URL)*


## 🛠️ Built With

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **CSS3** - Custom styling with gradients and animations
- **JavaScript ES6+** - Modern JavaScript features
- **ESLint** - Code linting and formatting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-products-list.git
   cd react-products-list
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Main header component
│   ├── Header.css          # Header styles
│   ├── SearchBar.jsx       # Search functionality
│   ├── SearchBar.css       # Search bar styles
│   ├── ProductGrid.jsx     # Product grid layout
│   ├── ProductGrid.css     # Grid styles
│   ├── ProductCard.jsx     # Individual product card
│   └── ProductCard.css     # Product card styles
├── data/
│   └── products.js         # Product data
├── App.jsx                 # Main application component
├── App.css                 # Global styles
└── main.jsx               # Application entry point
```

## 🎯 Key Components

### Header
- Gradient background with overlay effects
- Responsive typography
- Clean, centered layout

### SearchBar
- Real-time search functionality
- Focus states and animations
- Clear search option
- Results counter

### ProductGrid
- Responsive grid layout
- Staggered animations
- No results state
- Mobile-optimized

### ProductCard
- Hover effects and animations
- Product information display
- Rating system
- Add to cart functionality

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🎨 Customization

### Adding New Products
Edit `src/data/products.js` to add or modify products:

```javascript
{
  id: 13,
  name: "Your Product Name",
  description: "Product description here...",
  price: 99.99,
  category: "Category",
  rating: 4.5,
  image: "product-image.jpg"
}
```

### Styling
- Global styles: `src/App.css`
- Component-specific styles: Individual CSS files in `src/components/`
- Color scheme: Modify CSS custom properties for consistent theming

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect Vite configuration
3. Deploy with default settings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [mohitpandey32](https://github.com/mohitpandey32)
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/mohit-pandey-02921a277/)
- Email: pandeymohit998@gmail.com

## 🙏 Acknowledgments

- Product images from [Pexels](https://pexels.com)
- Icons from [Heroicons](https://heroicons.com)
- Inspiration from modern e-commerce designs
- React community for excellent documentation

## 📈 Future Enhancements

- [ ] Shopping cart functionality
- [ ] Product categories filter
- [ ] Price range filter
- [ ] Product detail modal
- [ ] User authentication
- [ ] Wishlist feature
- [ ] Product reviews system
- [ ] Payment integration

---

⭐ **Star this repository if you found it helpful!**
