import './navbar.css'


const Navbar = () => {
    return (
        <header className="bg-amber-100">
            <div className="container mx-auto py-7 flex justify-between items-center">
                <div className="logo-container"></div>
                <nav className="navbar p-5 m-5 flex items-center">
                    <div className="flex items-center">
                        <img className="carrito" src="/carrito.svg" alt="" />
                        <a className="text-orange-800" href="#">Platos Principales</a>
                        <a className="text-orange-800" href="#">Entradas</a>
                        <a className="text-orange-800" href="#">Bebidas y postres</a>
                        <a className="text-orange-800" href="#">Menú Infantil</a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;


