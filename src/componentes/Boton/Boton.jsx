import './Boton.css'

const Boton = ({ children, className = "", onClick }) => {

    return (
        <button onClick={onClick} className={`boton bg-purpura rounded flex items-center py-4 text-center border-lime-800 ${className}`}>
            {children}
        </button>
    )
}

export default Boton;


// esto es lo que va pegado en App si quiero utilizarlo
/*       <Boton onClick={()=>console.log("boton cliekeado")}className='bg-red-600'>
        SOLO TEXTO
      </Boton> */
