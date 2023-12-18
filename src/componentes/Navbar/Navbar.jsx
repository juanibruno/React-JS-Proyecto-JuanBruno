import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="bg-amber-100">
            <div className="container mx-auto py-7 flex justify-between items-center">
                <div className="logo-container"></div>
                <nav className="navbar p-5 m-5 flex items-center">
                    <div className="flex items-center">
                        <img className="carrito" src="/carrito.svg" alt="carrito" />
                        <Link to={"/platos-postres"}>Platos y Postres</Link>
                        <Link to={"/llamarMozo"}>Llamar al Mozo</Link>
                        <Link to={"*"}></Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;


