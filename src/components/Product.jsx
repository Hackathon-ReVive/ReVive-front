import React from "react";

function Product({ id, name, image, price, type, description, sold }) {
    const euroPrice = new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "EUR",
    }).format(price);

    Product.defaultProps = {
        sold: false,
    };

    return (
        <section className="bg-white rounded-lg p-4 transition duration-300">
            <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg aspect-[2/3]" />
            <h2 className="font-['Fira_Sans'] text-lg font-semibold mt-2 text-emerald-900">{name}</h2>
            <p className="font-['Fira_Sans'] text-black">{type}</p>
            <p className="font-['Fira_Sans'] text-emerald-900 font-bold">{euroPrice}</p>
            <p className="font-['Fira_Sans'] text-black mt-1">{description}</p>
                {sold && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold">
                    ¡Vendido!
                    </div>
                )}
        </section>
    );
}

export default Product