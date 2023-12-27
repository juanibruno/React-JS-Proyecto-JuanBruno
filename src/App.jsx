
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './componentes/Navbar/Navbar';
import ListaItemsConteiner from './componentes/ListaItemsConteiner/ListaItemsConteiner'
import ClientesInfo from './componentes/ClientesInfo/ClientesInfo';
import { CartContext } from './componentes/context/CartContext';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([])
   

  return (

    <CartContext.Provider value={{
      cart,
      setCart
    }}>

      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<ListaItemsConteiner />} />
          <Route path='/platos-postres' element={<ListaItemsConteiner />} />
          <Route path='/platos-postres/:categoryId' element={<ListaItemsConteiner />} />
          <Route path='/llamarMozo' element={<ClientesInfo />} />
          <Route path='*' element={<h3 className='text-4xl font-semibold py-20 text-slate-100'>Por acá no es...</h3>} />
        </Routes>



      </BrowserRouter>

    </CartContext.Provider>





  )
}
export default App
