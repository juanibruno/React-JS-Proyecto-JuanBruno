import { useState, useEffect } from "react";
import Listaitems from "../ListaItem/ListaItems";
import "./ListaItemsConteiner.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../firebase/config";
import { doc } from "firebase/firestore";

const ListaItemsConteiner = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();
    console.log(categoryId);

    useEffect(() => {
        setLoading(true);

        // 1. Armado de referencia (sync)
        const productosRef = collection(dataBase, 'Productos');
        const q = categoryId
            ? query(productosRef, where('category', '==', categoryId))
            : productosRef

        // Verificación de categoryId antes de crear la consulta
        getDocs(q)
            .then((querySnapshot) => {
                const docs = querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }
                ))
                console.log(docs);
                setProductos(docs);
            })
            .finally(() => setLoading(false));

                // 2. Llamado a esa referencia (async)
            }, [categoryId]);

return (
    <>
        {loading ? (
            <h2 className="titulo flex flex-grap justify-center gap-6 items-center font-semibold text-4xl my-4">
                Pronto verás todo lo que tenemos disponible para vos...
            </h2>
        ) : (
            <Listaitems productos={productos} />
        )}
    </>
);
};

export default ListaItemsConteiner;
