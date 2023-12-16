import { useState } from 'react'


const Clicker = () => {
    let [contador, setContador] = useState (0)

    
    const incrementar = () => {
        setContador ( contador + 1 )
        
    }

    return (
<div>
    <button onClick={incrementar}>Click me</button>
    <hr />
    <p>Clicks:{contador}</p>
</div>

    )
}

export default Clicker