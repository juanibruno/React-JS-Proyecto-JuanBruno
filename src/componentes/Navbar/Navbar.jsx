import Carrito from './Carrito';
import './Navbar.css'
import { Link } from 'react-router-dom';
/* import Carrito from './Carrito'; */

const Navbar = () => {
    return (
        <header className="bg-amber-100">
            <div className="container mx-auto py-7 flex justify-between items-center">
                <div className="logo-container"></div>
                <nav className="navbar p-5 m-5 flex items-center">
                    <div className="flex items-center">
                        <Link to={"/"}>Inicio</Link>
                        <Link to={"/platos-postres/carnes"}>Carnes</Link>
                        <Link to={"/platos-postres/otros"}>Otros</Link>
                        <Link to={"/platos-postres/infantil"}>Menu Infantil</Link>
                        <Link to={"/platos-postres/postres"}>Postres</Link>
                        <Link to={"/llamarMozo"}>Llamar al Mozo</Link>
                        <Link to={"*"}></Link>
                        <Carrito/>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;


