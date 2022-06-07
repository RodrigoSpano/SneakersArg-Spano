import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./App/components/Navbar"
import { Footer } from './App/components/footer/Footer'
import Home from "./App/pages/Home"

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={''} /> //todo page not found
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
