import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { CartContext } from "../CartContext";
import { UserContext } from "../UserContext";

function Header() {
    const { cart } = useContext(CartContext);
    const { user, logout } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white text-emerald-900 font-['Fira_Sans'] flex justify-between items-center p-3">
            <div className="bg-green-100 flex items-center space-x-2 rounded-2xl p-2 m-1">
                <img src="./assets/logo.svg" alt="Logo de ReVive" className="h-10 w-10" />
                <Link to="/home" className="font-bold">ReVive</Link>
            </div>
            <button className="md:hidden block text-emerald-900" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
            </button>
            <nav className={`flex items-center space-x-2 md:flex ${isOpen ? "flex-col absolute top-16 left-0 w-full bg-white shadow-md" : "hidden md:block"}`}>
                <Link to="/home" className="py-2 px-4">Inicio</Link>
                <Link to="/products" className="py-2 px-4">Productos</Link>
                <Link to="/about" className="py-2 px-4">Sobre nosotres</Link>
                {user ? (
                    <>
                        <span className="py-2 px-4">Bienvenido, {user.username}</span>
                        <button onClick={logout} className="py-2 px-4">Cerrar sesión</button>
                    </>
                ) : (
                    <>
                        <Link to="/register" className="py-2 px-4">Registrarse</Link>
                        <Link to="/login" className="py-2 px-4">Iniciar sesión</Link>
                    </>
                )}
                <Link to="/cart" className="relative">
                    Carrito
                    {cart.length > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                            {cart.length}
                        </span>
                    )}
                </Link>
            </nav>
        </header>
    );
}

export default Header;