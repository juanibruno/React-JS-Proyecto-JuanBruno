import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaItemsConteiner from "../componentes/ListaItemsConteiner/ListaItemsConteiner";
import Checkout from "../componentes/Checkout/Checkout";
import VistaCarrito from "../componentes/VistaCarito/VistaCarrito";
import ClientesInfo from "../componentes/ClientesInfo/ClientesInfo";
import Navbar from "../componentes/Navbar/Navbar";
import Login from "../componentes/Loggin/Login";
import { UserContext } from "../componentes/context/UserContext";




const AppRouter = () => {

    const { user } = useContext(UserContext)

    return (

        <BrowserRouter>
            <Navbar />

            {user.logged ? (
                <Routes>
                    <Route path='/' element={<ListaItemsConteiner />} />
                    <Route path='/platos-postres' element={<ListaItemsConteiner />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/carrito' element={<VistaCarrito />} />
                    <Route path='/platos-postres/:categoryId' element={<ListaItemsConteiner />} />
                    <Route path='/llamarMozo' element={<ClientesInfo />} />
                    <Route path='*' element={<h3 className='text-4xl font-semibold py-20 text-slate-100'>Presiona <h2 className="text-red-600 py-2 font-semibold ">Inicio</h2> por favor!</h3>} />
                </Routes>
            ) :
                (
                <Login />
                )}
                
        </BrowserRouter>
    )
}

export default AppRouter; 