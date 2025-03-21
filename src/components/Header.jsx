<<<<<<< HEAD
import { useContext } from "react";
=======
import React from "react";
import { useContext, useState } from "react";
>>>>>>> development
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { CartContext } from "../CartContext";
import { UserContext } from "../UserContext";

function Header() {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(UserContext);
<<<<<<< HEAD

  return (
    <header className="bg-green-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">ReVive</h1>

      <nav className="flex gap-4">
        <Link to="/" className="hover:underline">
          Inicio
        </Link>
        <Link to="/products" className="hover:underline">
          Productos
        </Link>

        {user ? (
          <>
            <span className="font-semibold">Bienvenido, {user.name}</span>
            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
            >
=======
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-emerald-900 font-['Fira_Sans'] flex justify-between items-center p-3">
      <div className="bg-green-100 flex items-center space-x-2 rounded-2xl p-2 m-1">
        <img
          src="./assets/logo.svg"
          alt="Logo de ReVive"
          className="h-10 w-10"
        />
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
        <Link to="/about-us" className="py-2 px-4">
          Sobre nosotres
        </Link>
        {user ? (
          <>
            <span className="py-2 px-4">Bienvenido, {user.username}</span>
            <button onClick={logout} className="py-2 px-4">
>>>>>>> development
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
<<<<<<< HEAD
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Registrarse
            </Link>
=======
            <Link to="/register" className="py-2 px-4">
              Registrarse
            </Link>
            <Link to="/login" className="py-2 px-4">
              Iniciar sesión
            </Link>
>>>>>>> development
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
