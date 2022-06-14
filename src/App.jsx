import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
import { Navbar } from "./App/components/Navbar"
import { Footer } from './App/components/footer/Footer'
import Home from "./App/pages/Home"
import Products from "./App/pages/Products"
import ProductPage from "./App/pages/ProductPage"
import SupportPage from "./App/pages/SupportPage"
import Cart from "./App/pages/Cart"
import Account from "./App/pages/Account"
import { CartProvider } from "./App/context/CartContext"

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sneakers" element={<Products />} />
          <Route path="/sneakers/:itemId" element={<ProductPage />} />
          <Route path="/contact" element={<SupportPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={''} /> //todo page not found
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
