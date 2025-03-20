import React, { useContext } from "react";
import { CartContext } from "../CartContext.jsx";
import { createOrder } from "../apiService";
import Header from "./Header";
import Footer from "./Footer";

function Cart() {
    const { cart, user, removeFromCart, clearCart } = useContext(CartContext);

    const handleCheckout = async () => {
        if (!user) {
            alert("Por favor, inicie sesión para realizar el pedido.");
            return;
        }

        try {
            for (const product of cart) {
                await createOrder({ productId: product.id, status: "reserved" });
            }
            clearCart();
            alert("Orden creada con éxito");
        } catch (error) {
            console.error("Error creating order:", error);
            alert("Error al crear la orden");
        }
    };

    return (
        <>
            <Header />
            <main className="container bg-green-100 mx-auto p-4">
                <h1 className="text-2xl font-bold text-center mb-6">Carrito de la compra</h1>
                {user ? (
                    <div className="mb-6">
                        <h2 className="text-xl font-bold">Datos del Usuario</h2>
                        <p>Nombre: {user.name}</p>
                        <p>Email: {user.email}</p>
                    </div>
                ) : (
                    <p className="mb-6">Por favor, inicie sesión para ver los detalles del usuario.</p>
                )}
                <ul className="space-y-4">
                    {cart.map((product) => (
                        <li key={product.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
                            <div>
                                <h3 className="font-bold">{product.name}</h3>
                                <p>Precio: {product.price} €</p>
                                <p>Descripción: {product.description}</p>
                            </div>
                            <button onClick={() => removeFromCart(product.id)} className="bg-red-500 text-white py-1 px-4 rounded">
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
                <button onClick={handleCheckout} className="mt-6 bg-emerald-900 text-white py-2 px-6 rounded" disabled={!user}>
                    Realizar pedido
                </button>
            </main>
            <Footer />
        </>
    );
}

export default Cart;