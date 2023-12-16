
import { useState, useEffect } from "react"
import { pedirMenu } from "../../utilidades/utils";
import Listaitems from "../ListaItem/ListaItems";

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
                    ? <h2>cargando...</h2>
                    : <Listaitems productos={productos} />
            }
        </>
    )

}
export default ListaItemsConteiner