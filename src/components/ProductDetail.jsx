import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../CartContext";

const products = [
  {
    id: 0,
    image: "/assets/product0.jpg",
    title: "Libro",
    price: 19.99,
    type: "Libros",
    description: "Un libro interesante para aprender.",
  },
  {
    id: 1,
    image: "/assets/product1.jpg",
    title: "Bolsa",
    price: 29.99,
    type: "Accesorios",
    description: "Bolsa espaciosa y elegante.",
  },
  {
    id: 2,
    image: "/assets/product2.jpg",
    title: "Botas",
    price: 39.99,
    type: "Calzado",
    description: "Cómodos y modernos para cualquier ocasión.",
  },
  {
    id: 3,
    image: "/assets/product3.jpg",
    title: "Libro",
    price: 24.99,
    type: "Libros",
    description: "Una novela fascinante para disfrutar.",
  },
  {
    id: 4,
    image: "/assets/product4.jpg",
    title: "Cojín",
    price: 49.99,
    type: "Hogar",
    description: "Suave y decorativo para tu sala o dormitorio.",
  },
  {
    id: 5,
    image: "/assets/product5.jpg",
    title: "Libro",
    price: 59.99,
    type: "Libros",
    description: "Un clásico de la literatura imprescindible.",
  },
];

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <>
      <section className="container bg-green-100 mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">{product.title}</h1>
        <div className="flex flex-col items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-40 object-cover rounded-lg aspect-[2/3]"
          />
          <p className="font-['Fira_Sans'] text-black">{product.type}</p>
          <p className="font-['Fira_Sans'] text-emerald-900 font-bold">
            {product.price} €
          </p>
          <p className="font-['Fira_Sans'] text-black mt-1">
            {product.description}
          </p>
          <button
            onClick={() => addToCart(product)}
            className="mt-2 bg-emerald-900 text-white py-1 px-4 rounded"
          >
            Agregar al carrito
          </button>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
