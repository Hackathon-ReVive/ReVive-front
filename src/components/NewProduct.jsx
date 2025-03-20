import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../services/api";
import Button from "./Button";

function NewProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await createProduct(data);
      console.log("Producto agregado exitosamente");
      navigate("/products");
    } catch (error) {
      console.error("Error al agregar producto:", error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-cover bg-center bg-[url(/assets/bgLoginRegister.png)]">
      <div className="max-w-md mx-auto p-8 bg-[#ECFDF5] shadow-md rounded-3xl border border-green-300 backdrop-blur-lg bg-opacity-80">
        <h2 className="text-3xl font-bold text-center text-[#064E3B] mb-2">
          Agregar Nuevo Producto
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <label
            htmlFor="name"
            className="block text-[#059669] text-sm font-medium"
          >
            Nombre del Producto
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "El nombre es obligatorio" })}
            className="w-full p-3 border border-[#A7F3D0] rounded-lg"
            placeholder="Ej: Camiseta, Zapatos, Libro..."
          />
          {errors.name && (
            <p className="text-red-500 text-sm border-1 border-red-500 rounded bg-red-100 p-2">
              {errors.name.message}
            </p>
          )}

          <label
            htmlFor="price"
            className="block text-[#059669] text-sm font-medium"
          >
            Precio (€)
          </label>
          <input
            id="price"
            type="number"
            step="0.01"
            {...register("price", {
              required: "El precio es obligatorio",
              min: { value: 0.1, message: "El precio debe ser mayor a 0" },
            })}
            className="w-full p-3 border border-[#A7F3D0] rounded-lg"
            placeholder="Ej: 19.99"
          />
          {errors.price && (
            <p className="text-red-500 text-sm border-1 border-red-500 rounded bg-red-100 p-2">
              {errors.price.message}
            </p>
          )}

          {/* Categoría */}
          <label
            htmlFor="category"
            className="block text-[#059669] text-sm font-medium"
          >
            Categoría
          </label>
          <select
            id="category"
            {...register("category", { required: "Selecciona una categoría" })}
            className="w-full p-3 border border-[#A7F3D0] rounded-lg"
          >
            <option value="">Seleccione una categoría</option>
            <option value="Libros">Libros</option>
            <option value="Accesorios">Accesorios</option>
            <option value="Calzado">Calzado</option>
            <option value="Hogar">Hogar</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm border-1 border-red-500 rounded bg-red-100 p-2">
              {errors.category.message}
            </p>
          )}

          {/* Descripción */}
          <label
            htmlFor="description"
            className="block text-[#059669] text-sm font-medium"
          >
            Descripción
          </label>
          <textarea
            id="description"
            {...register("description", {
              required: "La descripción es obligatoria",
            })}
            className="w-full p-3 border border-[#A7F3D0] rounded-lg"
            placeholder="Escribe una breve descripción del producto"
          />
          {errors.description && (
            <p className="text-red-500 text-sm border-1 border-red-500 rounded bg-red-100 p-2">
              {errors.description.message}
            </p>
          )}

          <label
            htmlFor="image"
            className="block text-[#059669] text-sm font-medium"
          >
            URL de la Imagen
          </label>
          <input
            id="image"
            type="url"
            {...register("image", { required: "La imagen es obligatoria" })}
            className="w-full p-3 border border-[#A7F3D0] rounded-lg"
            placeholder="Ej: https://misitio.com/imagen.jpg"
          />
          {errors.image && (
            <p className="text-red-500 text-sm border-1 border-red-500 rounded bg-red-100 p-2">
              {errors.image.message}
            </p>
          )}

          {/* Botón de enviar */}
          <Button
            type="submit"
            text="Agregar Producto"
            className="w-full transition"
          />
        </form>
      </div>
    </section>
  );
}

export default NewProduct;
