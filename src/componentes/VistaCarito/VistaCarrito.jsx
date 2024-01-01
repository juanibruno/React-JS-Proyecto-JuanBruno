import { useContext } from 'react';
import { CartContext } from "../context/CartContext";


const VistaCarrito = () => {
    const { cart } = useContext(CartContext)

    return (
        <section className="container m-auto mt-8">
            <h2 className="text-5xl font-semibold text-white">Tu Pedido</h2>
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
        </section>
    );
}

export default VistaCarrito;
