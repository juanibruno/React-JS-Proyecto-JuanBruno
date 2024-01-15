import "./ListaItems.css"
import Boton from "../Boton/Boton";
import AgregarCarrito from "../../ejemplos/AgregarCarrito";
import OptionSelector from "../../OptionSelector/OptionSelector";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


const Listaitems = ({ productos }) => {



  const { cart, setCart, isInCart } = useContext(CartContext)

 /*  console.log("ListaItems ", cart) */

  const handleAgregar = (itemToCart) => {

   /*  console.log(itemToCart); */

  };

  return (
    <section className="container m-auto mt-4">
      <h2 className="titulo text-4xl font-semibold text-center">Opciones</h2>
      <hr />
      <div className="flex flex-wrap justify-around gap-6 items-center">
        {productos.map((item) => (
          <article key={item.id} className="cart">
            <img src={item.img} alt={item.nombre} className="cart-img" />
            <div className="cart-info">
              <h3 className="text-2xl font-semibold">{item.producto}</h3>
              <p className="nombreProducto">{item.nombre}</p>
              <hr />

              <p>{item.description}</p>
              <p>Precio por Unidad: ${item.price}</p>
            </div>
            {
              isInCart(item.id)
                ? <Boton className='bg-red-600'><Link to="./carrito">Ir al Carrito</Link></Boton>
                : <>
                  <AgregarCarrito id={item.id} stock={item.stock} onAgregar={handleAgregar} item={item} />
                 
                </>
            }






          </article>
        ))}
      </div>
    </section>

  )

}
export default Listaitems;

