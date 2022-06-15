
import { CartProvider } from "./App/context/CartContext"
import { AuthProvider } from "./App/context/AuthContext"
import AppRouter from "./App/routes/AppRouter"

function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </AuthProvider>
  )
}

export default App
