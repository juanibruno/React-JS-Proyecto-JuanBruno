import { useState } from 'react'


export const Clicker = () => {
    let [contador, setContador] = useState (0)

    
    const incrementar = () => {
        setContador ( contador + 1 )
        
    }

    return (
<div>
    <button onClick={incrementar}>Clikeame</button>
    <hr />
    <p>Clicks:{contador}</p>
</div>

    )
}