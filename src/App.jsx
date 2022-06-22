
import { CartProvider } from "./App/context/CartContext"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Account from "./App/pages/Account";
import Cart from "./App/pages/Cart";
import Home from "./App/pages/Home";
import ProductPage from "./App/pages/ProductPage";
import Products from "./App/pages/Products";
import { Navbar } from "./App/components/Navbar";
import { Footer } from "./App/components/footer/Footer";
import Checkout from "./App/components/cart/Checkout";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sneakers" element={<Products />} />
              <Route path="/sneakers/search/:prodName" element={<Products />} />
              <Route path="/sneakers/brand/:brand" element={<Products />} />
              <Route path="/sneakers/price/:price" element={<Products />} />
              <Route path="/sneakers/:itemId" element={<ProductPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/cart/checkout" element={<Checkout />} />
              <Route path="/account" element={<Account />} />
              <Route path="*" element={<Navigate to='/' />} />
            </Routes>
          <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
