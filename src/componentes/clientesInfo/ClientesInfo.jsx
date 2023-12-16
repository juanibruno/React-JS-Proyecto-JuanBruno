import React, { useState } from 'react';
import './clientesInfo.css'



 const ClientesInfo = () => {

    const [nombre, setNombre] = useState('');
    const [mesa, setMesa] = useState('');

    const nuevoPedido = () => {
        alert('nuevo pedido de la mesa n° '+ mesa + 'a nombre de ' + nombre);
    }

    return (
        <div className="ordenNueva">
            <label className="bg-amber-100 bordeEstilo">Nombre del Cliente:</label>
            <input type="text" id="nombre" />
            <label className="bg-amber-100 bordeEstilo">Mesa del Cliente:</label>
            <input type="text" id="mesa" />
            <button className="llamarMozo bg-amber-250 " onClick={nuevoPedido}>Llamar Mozo</button>
        </div>

    )
}

export default ClientesInfo
