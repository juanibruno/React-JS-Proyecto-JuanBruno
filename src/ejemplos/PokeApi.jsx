import { useEffect, useState } from "react";
import Boton from './../componentes/Boton/Boton'


const PokeApi = () => {

    const [pokemon, setPokemon] = useState(null);
    console.log(pokemon);
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/151')
            .then((response) => response.json())  /* .json devuelve la respuesta de la peticion en formato json */
            .then((data) => {
                setPokemon(data);
            });
    }, []);

    return (
        <div className="pokeconteiner m-auto mt-8">
            <h2 className="text-4xl font-semibold">PokeApi</h2>
            <hr />

        {
            pokemon && 
            <>
                <h2 className="text 2xl font-semibold">{pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            </>
        }

     
        </div>
    )
}

export default PokeApi