import { useContext } from 'react';
import cartIcon from '../../assets/cart.svg'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CarritoFinal = () => {

    const {itemEnCarrito} = useContext (CartContext)

    return(
        <Link to="./carrito" className='flex items-center gap-2 cursor-pointer'>
            <img src={cartIcon} alt="Cart icono" className='w-7' />
            <span className='text-black text-2xl'>{ itemEnCarrito() }</span>
        </Link>
    )
}

export default CarritoFinal;