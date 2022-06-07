import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Banner } from "./App/components/Banner"
import MostPopular from "./App/components/MostPopular"
import { Navbar } from "./App/components/Navbar"
import { Footer } from './App/components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Banner />
      <MostPopular />
      
      <Footer />
    </BrowserRouter>
  )
}

export default App
