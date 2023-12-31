import React, { useState } from 'react';
import './clientesInfo.css'



 const ClientesInfo = () => {

    const [nombre, setNombre] = useState('');
    const [mesa, setMesa] = useState('');

    const nuevoPedido = () => {
        alert('Nuevo llamado de la mesa N° '+ mesa + ' / Cliente:  ' + nombre);
    }

    return (
        <div className="ordenNueva">
            <label className="bg-amber-100 bordeEstilo py-2 m-3">En que mesa estás? </label>
            <input type="text" id="mesa" onChange={(e) => setMesa(e.target.value)} className='py-2 m-3'/>
            <label className="bg-amber-100 bordeEstilo py-2 m-3">Tu nombre: </label>
            <input type="text" id="nombre"  onChange={(e) => setNombre(e.target.value)} className='py-2 m-3' />
            <button className="llamarMozo bg-amber-250 pl-4" onClick={nuevoPedido}>Llamar Mozo</button>
        </div>

    )
}

export default ClientesInfo
