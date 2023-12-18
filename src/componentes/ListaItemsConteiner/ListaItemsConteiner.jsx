
import { useState, useEffect } from "react"
import { pedirMenu } from "../../utilidades/utils";
import Listaitems from "../ListaItem/ListaItems";
import "./ListaItemsConteiner.css"
import { useParams } from "react-router-dom";

const ListaItemsConteiner = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()
    console.log(categoryId);    

    useEffect(() => {
        setLoading(true)

        pedirMenu()
            .then((data) => {

                const items = categoryId
                                ? data.filter(prod => prod.category === categoryId)
                                : data

                setProductos(items)
                
            })
            .finally(() => setLoading( false ))
    }, [categoryId])

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