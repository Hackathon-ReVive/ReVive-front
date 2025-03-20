import React, { useState} from "react";
import Product from "./Product";

function Featured() {
    const [hoveredId, setHoveredId] = useState(null);

    const products = [
        { id: 0, image: "/assets/product0.jpg", name: "Libro", price: 19.99, type: "Libros", description: "Un libro interesante para aprender." },
        { id: 1, image: "/assets/product1.jpg", name: "Bolsa", price: 29.99, type: "Accesorios", description: "Bolsa espaciosa y elegante." },
        { id: 2, image: "/assets/product2.jpg", name: "Botas", price: 39.99, type: "Calzado", description: "Cómodos y modernos para cualquier ocasión." },
        { id: 3, image: "/assets/product3.jpg", name: "Libro", price: 24.99, type: "Libros", description: "Una novela fascinante para disfrutar." },
        { id: 4, image: "/assets/product4.jpg", name: "Cojín", price: 49.99, type: "Hogar", description: "Suave y decorativo para tu sala o dormitorio." },
        { id: 5, image: "/assets/product5.jpg", name: "Libro", price: 59.99, type: "Libros", description: "Un clásico de la literatura imprescindible." },
    ];

    return (
        <section className="container bg-green-100 w-full mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Productos destacados</h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div
                    key={product.id}
                    className={`transition-opacity duration-300 ${hoveredId !== null && hoveredId !== product.id ? "opacity-50" : "opacity-100"}`}
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}>
                    <Product {...product} />
                    </div>
                ))}
                </div>
        </section>
    );
}

export default Featured