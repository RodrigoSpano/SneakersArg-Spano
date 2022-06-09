import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
import { Navbar } from "./App/components/Navbar"
import { Footer } from './App/components/footer/Footer'
import Home from "./App/pages/Home"
import Products from "./App/pages/Products"
import ProductPage from "./App/pages/ProductPage"
import SupportPage from "./App/pages/SupportPage"
import Cart from "./App/pages/Cart"

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sneakers" element={<Products />} />
        <Route path="/sneakers/:itemId" element={<ProductPage />} />
        <Route path="/contact" element={<SupportPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={''} /> //todo page not found
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
