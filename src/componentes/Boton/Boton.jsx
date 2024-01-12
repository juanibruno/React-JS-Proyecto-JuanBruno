import './Boton.css'

const Boton = ({ children, className = "", onClick }) => {

    return (
        <button onClick={onClick} className={`boton bg-purpura rounded flex items-center py-4 text-center border-lime-800 ${className}`}>
            {children}
        </button>
    )
}

export default Boton;


