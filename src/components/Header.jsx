import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "/assets/logo.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-emerald-900 font-['Fira_Sans'] flex justify-between items-center p-3">
      <div className="bg-green-100 flex items-center space-x-2 rounded-2xl p-2 m-1">
        <img src={logo} alt="Logo de ReVive" className="h-10 w-10" />
        <Link to="/home" className="font-bold">
          ReVive
        </Link>
      </div>
      <button
        className="md:hidden block text-emerald-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="h-8 w-8" />
        ) : (
          <Bars3Icon className="h-8 w-8" />
        )}
      </button>
      <nav
        className={`flex items-center space-x-2 md:flex ${
          isOpen
            ? "flex-col absolute top-16 left-0 w-full bg-white shadow-md"
            : "hidden md:block"
        }`}
      >
        <Link to="/home" className="py-2 px-4">
          Inicio
        </Link>
        <Link to="/products" className="py-2 px-4">
          Productos
        </Link>
        <Link to="/about" className="py-2 px-4">
          Sobre nosotres
        </Link>
        <Link to="/login" className="py-2 px-4">
          Iniciar sesión
        </Link>
        <Link to="/register" className="py-2 px-4">
          Registrarse
        </Link>
      </nav>
    </header>
  );
}

export default Header;
