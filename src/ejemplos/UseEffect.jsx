import { useEffect } from "react"
import { build } from "vite"


const EjemploEffect = () => {

    useEffect(() => {
console.log("hola mundo");
    }, [])


    return (
        <button>click</button>

    )
}

export default EjemploEffect