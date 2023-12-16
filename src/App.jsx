
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './componentes/Navbar/Navbar';
import ListaItemsConteiner  from './componentes/ListaItemsConteiner/ListaItemsConteiner'




function App() {

    return (
    <>

      <Navbar />
     <ListaItemsConteiner />


 
      </>
  )
}
export default App
