import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="bg-amber-100">
            <div className="container mx-auto py-7 flex justify-between items-center">
                <div className="logo-container"></div>
                <nav className="navbar p-5 m-5 flex items-center">
                    <div className="flex items-center">
                        <img className="carrito" src="/carrito.svg" alt="" />
                        {/* <link to={"/"} className="text-orange-800" >Platos Principales</link>  */}    { /* aca van los enlaces de los componentes a reenderizar */}
                       {/*  <link to={"/"}className="text-orange-800" >Entradas</link>   */}                        {/* en to va la ruta hacia ese componente que quiero direccionar */}
                        {/* <link className="text-orange-800" >Bebidas y postres</link> */}
                       {/*  <link className="text-orange-800" >Menú Infantil</link> */}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;


