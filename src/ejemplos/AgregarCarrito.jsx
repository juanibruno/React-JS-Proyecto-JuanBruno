import React, { useContext, useState } from "react"
import Boton from "../componentes/Boton/Boton"
import { CartContext } from "../componentes/context/CartContext"

/* import { OpcionesMenu } from "../Mock/data" */

const AgregarCarrito = ({ id, stock, item }) => {

    const { cart, setCart, isInCart } = useContext(CartContext)
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
            id,
            cantidad,
            item

        }
        if (isInCart(item.id)) {
            // Actualiza la cantidad del item existente
            const updatedCart = cart.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, cantidad: cartItem.cantidad + cantidad } : cartItem
            );
            setCart(updatedCart);
        } else {
            // Agrega el item al carrito
            const newCart = [...cart, itemToCart];
            setCart(newCart);
        }
    };


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

