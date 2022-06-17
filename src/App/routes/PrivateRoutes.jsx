import { Navigate, Route, Routes } from "react-router-dom"
import { Footer } from "../components/footer/Footer"
import { Navbar } from "../components/Navbar"
import Account from "../pages/Account"
import Cart from "../pages/Cart"
import Home from "../pages/Home"
import ProductPage from "../pages/ProductPage"
import Products from "../pages/Products"


const PrivateRoutes = () => {
  return (
    <>
      <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sneakers" element={<Products />} />
          <Route path="/sneakers/search/:prodName" element={<Products />} />
          <Route path="/sneakers/brand/:brand" element={<Products />} />
          <Route path="/sneakers/price/:price" element={<Products />} />
          <Route path="/sneakers/:itemId" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>

      <Footer />
    </>
  )
}
export default PrivateRoutes;