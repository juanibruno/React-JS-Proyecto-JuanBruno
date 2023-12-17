
import { useState, useEffect } from "react"
import { pedirMenu } from "../../utilidades/utils";
import Listaitems from "../ListaItem/ListaItems";
import "./ListaItemsConteiner.css"

const ListaItemsConteiner = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirMenu()
            .then((data) => {
                setProductos(data)
                setLoading (false)
            })
    }, [])

    return (
        <>
            {
                loading
                    ? <h2 className="titulo flex flex-grap justify-center gap-6 items-center font-semibold text-4xl my-4">Pronto verás todo lo que tenemos disponible para vos...</h2>
                    : <Listaitems productos={productos} />
            }
        </>
    )

}
export default ListaItemsConteiner