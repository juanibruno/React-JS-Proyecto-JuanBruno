import { useState } from 'react'
import './App.css'
import Navbar from './componentes/Navbar/Navbar'
/* import MainContenido from './componentes/MainContenido/mainContenido' */
import ListaItems from './componentes/ListaItems/ListaItems'
import { ClientesInfo } from './componentes/clientesInfo/ClientesInfo'


function App() {
  
  return (
    <>
    <Navbar/>
    <ListaItems/>
    <ClientesInfo/>
    </>
  ) 
}

export default App
