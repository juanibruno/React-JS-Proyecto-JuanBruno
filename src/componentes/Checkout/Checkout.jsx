import { useContext, useState } from "react"
import "./Checkout.css"
import { CartContext } from "../context/CartContext";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { dataBase } from "../../firebase/config";


const Checkout = () => {

    const { cart, clearCart } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: "",
        mesa: "",
        mail: "",
    });

    const [ordenId, setOrdenId] = useState(null)
    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values);

        const orden = {
            cliente: values,
            items: cart,
            fecha: new Date()

        }

        const ordenRef = collection(dataBase, "Ordenes")
        addDoc(ordenRef, orden).then((doc) => setOrdenId(doc.id))

    };
    if (ordenId) {
        return (
            <div className="conteiner m-auto mt-10">
                <h2 className="text-4xl font-semibold text-slate-100 py-4">Tu pedido se encuentra en Preparacion</h2>
                <hr />
                <p className="text-1xl font-semibold text-slate-100 py-2">Tu numero de pedido es: {ordenId}</p>
            </div>
        )
    }

    return (
        <div className="conteiner m-auto mt-10">
            <h2 className="text-4xl font-semibold text-slate-100 py-4">Ingresa tus datos</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input name="nombre" onChange={handleInputChange} value={values.nombre} type="text" placeholder="Nombre" />
                <input name="mesa" onChange={handleInputChange} value={values.mesa} type="text" placeholder="En que mesa estas?" />
                <input name="mail" onChange={handleInputChange} value={values.mail} type="email" placeholder="Dejanos tu correo" />
                <button type="submit" className="text-center text-slate-50 py-2">Enviar</button>

            </form>
        </div>
    )
}

export default Checkout