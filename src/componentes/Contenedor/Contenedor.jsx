import Clicker from '../../ejemplos/Clicker'
import Boton from '../Boton/Boton'
import './Contenedor.css'

const Contenedor = ({category, producto, description, price }) => {

    return (
        <>
            <div className="contenedor flex flex-wrap justify-around">
                <div className="card bg-red-800 border-black border-2 ">
                    <h2 className="card-title">{category}</h2>
                    <img src="https://via.placeholder.com/150" alt="Imagen de producto" className="card-img" />
                    <div className="description">
                        <p>Descripción: {description}</p>
                        <p className="card-price">{price}</p>
                        <Clicker/>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Contenedor

{/* <>
<div className="contenedor flex flex-wrap justify-around">
    <div className="card bg-red-800 border-black border-2 ">
        <h2 className="card-title">Nombre del Producto</h2>
        <img src="https://via.placeholder.com/150" alt="Imagen de producto" className="card-img" />
        <div className="description">
            <p>Descripción</p>
            <p className="card-price">$19.99</p>
        </div>
    </div>
</div>
</> */}