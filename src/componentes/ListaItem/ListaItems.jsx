import "./ListaItems.css"
import Boton from "../Boton/Boton";

const Listaitems = ({ productos }) => {

    return (
        <section className="container m-auto mt-4">
          <h2 className="titulo text-4xl font-semibold text-center">Platos y postres</h2>
          <hr />
          <div className="flex flex-wrap justify-around gap-6 items-center">
            {productos.map((item) => (
              <article key={item.id} className="cart">
                <img src={item.img} alt={item.nombre} className="cart-img" />
                <div className="cart-info">
                  <h3 className="text-2xl font-semibold">{item.producto}</h3>
                  <hr />
                  <p>{item.description}</p>
                  <p>Precio: ${item.price}</p>
                </div>
                <Boton onClick={()=>console.log("boton cliekeado")}className='bg-red-600'>Pedir</Boton>
              </article>
            ))}
          </div>
        </section>

    )

}
export default Listaitems;

