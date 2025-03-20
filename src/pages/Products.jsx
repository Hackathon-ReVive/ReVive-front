import Product from "../components/Product";
import Button from "../components/Button";

function Products() {
    const products = [
      { id: 0, image: "/assets/product0.jpg", name: "Libro", price: 19.99, type: "Libros", description: "Un libro interesante para aprender." },
      { id: 1, image: "/assets/product1.jpg", name: "Bolsa", price: 29.99, type: "Accesorios", description: "Bolsa espaciosa y elegante." },
      { id: 2, image: "/assets/product2.jpg", name: "Botas", price: 39.99, type: "Calzado", description: "Cómodos y modernos para cualquier ocasión." },
      { id: 3, image: "/assets/product3.jpg", name: "Libro", price: 24.99, type: "Libros", description: "Una novela fascinante para disfrutar." },
      { id: 4, image: "/assets/product4.jpg", name: "Cojín", price: 49.99, type: "Hogar", description: "Suave y decorativo para tu sala o dormitorio." },
      { id: 5, image: "/assets/product5.jpg", name: "Libro", price: 59.99, type: "Libros", description: "Un clásico de la literatura imprescindible." },
    ];

    return (
            <>
                <main className="container bg-[#DCFCE7] mx-auto p-4">
                    <h1 className="text-2xl font-bold text-center mb-6">Elige un artículo para darle una segunda vida</h1>
                    <Button 
                    text="Añade tu producto" 
                    onClick={() => window.location.href = '/add'} 
                    className="mx-auto block bg-blue-500 hover:bg-blue-700 mb-5"/>
                        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {products.map((product) => (
                        <Product key={product.id} {...product} />
                        ))}
                        </section>
                </main>
          </>
      );
    };
    
    export default Products