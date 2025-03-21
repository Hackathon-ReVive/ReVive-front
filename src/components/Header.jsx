import { useContext } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { CartContext } from "../CartContext";
import { UserContext } from "../UserContext";

function Header() {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(UserContext);

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
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Registrarse
            </Link>
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
