
import './App.css'
import { CartContext } from './componentes/context/CartContext';
import UserProvider from './componentes/context/UserContext';
import { useState } from 'react';
import AppRouter from './router/AppRouter';

function App() {

  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, { id: item.id, cantidad: 1, item }]);
  };
  const isInCart = (id) => {
    return cart.some(item => item.id === id)
  }

  const itemEnCarrito = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
  }

  const clearCart = () => {
    setCart([])
  }


  return (

    <UserProvider>
      <CartContext.Provider value={{
        cart,
        setCart,
        isInCart,
        addToCart,
        itemEnCarrito,
        clearCart,
      }}>
        <AppRouter />

      </CartContext.Provider>
    </UserProvider>

  )
}
export default App
