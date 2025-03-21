import React, { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import Button from "./Button";
import Modal from "./Modal";
import ProductDetail from "./ProductDetail";

function Product({ id, name, image, price, type, description, sold }) {
    const { addToCart } = useContext(CartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const euroPrice = new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "EUR",
    }).format(price);

    Product.defaultProps = {
        sold: false,
    };

    return (
        <article className="bg-white rounded-lg p-4 transition duration-300 relative">
            {/* Clickable Image that opens the modal */}
            <img 
                src={image} 
                alt={name} 
                className="w-full h-40 object-cover rounded-lg aspect-[2/3] cursor-pointer"
                onClick={() => setIsModalOpen(true)} 
            />
            <h2 className="font-['Fira_Sans'] text-lg font-semibold mt-2 text-emerald-900">{name}</h2>
            <p className="font-['Fira_Sans'] text-black">{type}</p>
            <p className="font-['Fira_Sans'] text-emerald-900 font-bold">{euroPrice}</p>
            <p className="font-['Fira_Sans'] text-black mt-1">{description}</p>

            {sold ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold">
                    ¡Vendido!
                </div>
            ) : (
                <Button
                    text="Agregar al carrito"
                    onClick={() => addToCart({ id, name, image, price, type, description })}
                    className="mt-2 bg-emerald-900 text-white w-full"
                />
            )}


            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ProductDetail product={{ id, name, image, price, type, description }} showAddToCart={false} />
            </Modal>
        </article>
    );
}

export default Product;
