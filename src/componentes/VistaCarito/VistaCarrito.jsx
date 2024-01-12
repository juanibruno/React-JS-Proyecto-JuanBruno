import { useContext } from 'react';
import { CartContext } from "../context/CartContext";
import Boton from '../Boton/Boton';
import { Link } from 'react-router-dom';



const VistaCarrito = () => {
    const { cart } = useContext(CartContext)
    

    if (cart.length === 0) {
        return (
            <section>
                <h2 className="titulo flex flex-grap justify-center gap-6 items-center font-semibold text-4xl my-4">Todavía no tenes productos seleccionados</h2>
                <hr />
                <a className='titulo text-white text-2xl' href="/">Volver</a>
            </section>
        )
    }
    return (
        <section className="container m-auto mt-8 ">
            <h2 className='text-3xl font-semibold text-slate-100 py-4'>Bienvenido</h2>
            <h3 className='text-2xl font-semibold text-slate-100 py-4' >Tu pedido</h3>
            <hr />

            <ul>
                    {
                        cart.map((item) => (
                            
                            <li key={item.id} style={{ border: '1px solid black' }}>
                                <img src={item.img} alt="Carrito" className='w-32' />
                                <div>
                                    <h3>{item.nombre}</h3>
                                    <p>$ {item.price}</p>
                                    <p>Cantidad: {item.cantidad}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <Boton><Link to="/checkout">Mandar el pedido al Mozo</Link></Boton>
            

        </section>
    );
}

export default VistaCarrito;
