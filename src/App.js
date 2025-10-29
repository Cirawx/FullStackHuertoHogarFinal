"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import ProductDetail from "./pages/ProductDetail/ProductDetail"
import Cart from "./pages/Cart/Cart"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Profile from "./pages/Profile/Profile"
import About from "./pages/About/About"
import Blog from "./pages/Blog/Blog"
import BlogDetail from "./pages/BlogDetail/BlogDetail"
import Checkout from "./pages/Checkout/Checkout"
import "./App.css"

function App() {
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState([])

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    const storedCart = localStorage.getItem("cart")

    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }

    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const handleLogin = (userData) => {
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const addToCart = (product, quantity = 1) => {
    const existingItem = cart.find((item) => item.id === product.id)

    if (existingItem) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)))
    } else {
      setCart([...cart, { ...product, quantity }])
    }
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId))
  }

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      setCart(cart.map((item) => (item.id === productId ? { ...item, quantity } : item)))
    }
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <Router>
      <div className="App">
        <Header user={user} onLogout={handleLogout} cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products addToCart={addToCart} />} />
            <Route path="/producto/:id" element={<ProductDetail addToCart={addToCart} />} />
            <Route
              path="/carrito"
              element={<Cart cart={cart} updateQuantity={updateCartQuantity} removeFromCart={removeFromCart} />}
            />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/registro" element={<Register onRegister={handleLogin} />} />
            <Route path="/perfil" element={<Profile user={user} />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/checkout" element={<Checkout cart={cart} user={user} clearCart={clearCart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
