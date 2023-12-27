import "./ListaItems.css"
import Boton from "../Boton/Boton";
import AgregarCarrito from "../../ejemplos/AgregarCarrito";
import OptionSelector from "../../OptionSelector/OptionSelector";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";


const Listaitems = ({ productos }) => {
  

 const { cart, setCart} = useContext(CartContext)

 console.log(cart);
 
  const handleAgregar = (itemToCart) => {
  
    console.log(itemToCart);
    
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
              <p>Precio: ${item.price}</p>
            </div>
            
            <AgregarCarrito id={item.id}stock={item.stock} onAgregar={handleAgregar} item={item} />
            <div>
              <OptionSelector />
            </div>

            <Boton onClick={() => console.log("boton cliekeado para ver detalle")} className='bg-red-600'>Ver detalle</Boton>
            {/* <Boton onClick={handleAgregar} className='bg-red-600'>Pedir</Boton> */}
          </article>
        ))}
      </div>
    </section>

  )

}
export default Listaitems;

