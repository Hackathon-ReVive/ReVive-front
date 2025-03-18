import logo from "./../assets/logo.svg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-white text-emerald-900 font-['Fira_Sans'] flex justify-between">
            <div className="bg-green-100 flex items-center space-x-2 rounded-2xl p-2 m-1">
                <img src={logo} alt="Logo de ReVive" className="h-10 w-10" />
                <Link to={"/home"}>ReVive</Link>
            </div>
                <nav className="flex items-center space-x-2">
                    <Link to={"/home"} className="py-2 px-4">Inicio</Link>
                    <Link to={"/products"} className="py-2 px-4">Productos</Link>
                    <Link to={"/about"} className="py-2 px-4">Sobre nosotres</Link>
                    <Link to={"/login"} className="py-2 px-4">Iniciar sesión</Link>
                    <Link to={"/register"} className="py-2 px-4">Registrarse</Link>
                </nav>
        </header>
    );
}

export default Header