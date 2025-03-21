import React, { useContext } from "react";
import { CartContext } from "../CartContext";

function ProductDetail({ product, showAddToCart = true }) {
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <section className="container bg-green-100 mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">{product.name}</h1>
      <div className="flex flex-col items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded-lg aspect-[2/3]"
        />
        <p className="text-black">{product.type}</p>
        <p className="text-emerald-900 font-bold">{product.price} €</p>
        <p className="text-black mt-1">{product.description}</p>
        {showAddToCart && (
          <button
            onClick={() => addToCart(product)}
            className="mt-2 bg-green-900 text-white py-1 px-4 rounded"
          >
            Agregar al carrito
          </button>
        )}
      </div>
    </section>
  );
}

export default ProductDetail;
