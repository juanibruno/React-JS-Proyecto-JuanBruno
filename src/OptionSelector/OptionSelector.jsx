import { useState } from "react";
import AgregarCarrito from "../ejemplos/AgregarCarrito";



const OptionSelector = () => {
       const [option, setOption] = useState ("")

    const handleSelect = (event) => {
        console.log(event.target.value);
    }

    return(
        <select onChange={handleSelect} className="border p-2">
            <option value="Individual">Individual</option>
            <option value="Para dos Personas">Para 2 Personas</option>
            <option value="Para cuatro Personas">Para 4 Personas</option>
        </select>
    )
}

export default OptionSelector;