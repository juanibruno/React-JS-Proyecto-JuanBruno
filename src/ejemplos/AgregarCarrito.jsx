import React, { useContext, useState } from "react"
import Boton from "../componentes/Boton/Boton"
import { CartContext } from "../componentes/context/CartContext"

import { OpcionesMenu } from "../Mock/data"

const AgregarCarrito = ({ id, stock, onAgregar, item }) => {

    const {cart, setCart, isInCart} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)
    
    

    console.log(isInCart(item.id));

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

 

    const handleAgregar = () => {

        const itemToCart = {
            ...id,
            cantidad,
            item

        }
        const newCart = cart.slice()
        newCart.push (itemToCart)

        setCart(newCart)

    }


    return (

        <div className="flex gap-4 items-center">
            <Boton onClick={handleRestar}>-</Boton>
            <span>{cantidad}</span>
            <Boton onClick={handleSumar}>+</Boton>
            <Boton onClick={handleAgregar} className="bg-red-600">Agregar</Boton>
        </div>

    )
}
export default AgregarCarrito;

