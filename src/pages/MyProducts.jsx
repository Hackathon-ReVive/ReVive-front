import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { getUserProducts, deleteProduct } from "../services/apiServices";
import Button from "./Button";

function UserProducts() {
  const { user } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Obtener productos del usuario
  useEffect(() => {
    if (!user) return;

    const fetchProducts = async () => {
      try {
        const data = await getUserProducts(user.id); // Usando Axios desde apiServices.js
        setProducts(data);
      } catch (err) {
        setError("Error al cargar productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [user]);

  // Eliminar producto
  const handleDelete = async (productId) => {
    if (!window.confirm("¿Estás seguro de eliminar este producto?")) return;

    try {
      await deleteProduct(productId); // Usando Axios desde apiServices.js
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Mis Productos
      </h2>

      {loading ? (
        <p className="text-center text-gray-600">Cargando productos...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : products.length === 0 ? (
        <div className="collapse collapse-arrow border border-gray-300 bg-gray-100 rounded-md">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-semibold">
            No has agregado productos aún.
          </div>
          <div className="collapse-content text-gray-600">
            Sube productos para que los demás usuarios puedan verlos y
            comprarlos.
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-green-200 text-gray-700">
                <th className="border border-gray-300 p-2">Imagen</th>
                <th className="border border-gray-300 p-2">Nombre</th>
                <th className="border border-gray-300 p-2">Precio</th>
                <th className="border border-gray-300 p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="border border-gray-300 p-2">{product.name}</td>
                  <td className="border border-gray-300 p-2">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="border border-gray-300 p-2 flex gap-2">
                    <Button
                      text="Editar"
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    />
                    <Button
                      text="Eliminar"
                      onClick={() => handleDelete(product.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UserProducts;
