import React, { useState } from "react"
import Boton from "../componentes/Boton/Boton"

import { OpcionesMenu } from "../Mock/data"

const AgregarCarrito = ({ id, stock }) => {
    const[cantidad, setCantidad] = useState(1)
  
    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }


    return (

        <div className="flex gap-4 items-center">
            <Boton onClick={handleRestar}>-</Boton>
            <span>{cantidad}</span>
            <Boton onClick={handleSumar}>+</Boton>
        </div>
        
        )
}
    export default AgregarCarrito

