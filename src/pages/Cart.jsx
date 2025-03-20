import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);

    const totalPrice = cart.reduce((total, product) => total + product.price, 0);

    return (
        <section className="container bg-green-100 mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6">Tu carrito</h1>

            {cart.length === 0 ? (
                <div className="text-center text-gray-600">
                <p>Tu carrito está vacío.</p>
                <Link to="/products">
                <Button text="Ver nuestra oferta de productos" className="mt-4" />
                </Link>
            </div>
            ) : (
                <div className="space-y-4">
                    {cart.map((product, index) => (
                        <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                            <div className="flex-1 ml-4">
                                <h2 className="text-lg font-semibold text-emerald-900">{product.name}</h2>
                                <p className="text-gray-700">{product.price} €</p>
                            </div>
                            <Button 
                                text="Eliminar de carrito"
                                onClick={() => removeFromCart(product.id)}
                            />
                        </div>
                    ))}

                    <div className="text-right font-bold text-lg text-emerald-900">
                        Total: {totalPrice.toFixed(2)} €
                    </div>
                </div>
            )}
        </section>
    );
}

export default Cart;