import { useForm } from "react-hook-form";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [emailExist, setEmailExist] = useState("");

  const onSubmit = async (data) => {
    setEmailExist("");
    try {
      const response = await axios.post("AQUI VA LA API", data);
      console.log("Registro Exitoso:", response.data);
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setEmailExist(
          "El correo electrónico ya está registrado. Por favor, usa otro."
        );
      } else {
        console.error(
          "Error en el Registro:",
          error.response?.data || error.message
        );
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-cover bg-center bg-[url(/assets/bgLoginRegister.png)]">
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md mt-50 mb-50 border-1 border-stone-200">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Registro de Usuario
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <label htmlFor="name" className="block text-gray-700 text-sm">
            Nombre Completo
          </label>
          <input
            type="text"
            {...register("name", { required: "El nombre es obligatorio" })}
            placeholder="Nombre Completo"
            className="w-full p-2 border border-gray-300 rounded"
            id="name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm border-1 border-red-500 rounded bg-red-100 p-2">
              {errors.name.message}
            </p>
          )}
          <label htmlFor="email" className="block text-gray-700 text-sm">
            Correo Electrónico
          </label>
          <input
            type="email"
            {...register("email", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[a-zA-Z]{2,}$/i,
                message: "Formato de correo inválido",
              },
            })}
            placeholder="Correo Electrónico"
            className="w-full p-2 border border-gray-300 rounded"
            id="email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm border-1 border-red-500 rounded bg-red-100 p-2">
              {errors.email.message}
            </p>
          )}
          {emailExist && (
            <p className="text-red-500 text-sm border-1 border-red-500 rounded bg-red-100 p-2">
              {emailExist}
            </p>
          )}
          <label htmlFor="address" className="block text-gray-700 text-sm">
            Dirección
          </label>
          <input
            type="text"
            {...register("address", {
              required: "La dirección es obligatoria",
            })}
            placeholder="Dirección"
            className="w-full p-2 border border-gray-300 rounded"
            id="address"
          />
          {errors.address && (
            <p className="text-red-500 text-sm border-1 border-red-500 rounded bg-red-100 p-2">
              {errors.address.message}
            </p>
          )}
          <label htmlFor="cp" className="block text-gray-700 text-sm">
            Código Postal
          </label>
          <input
            type="text"
            {...register("postalCode", {
              required: "El código postal es obligatorio",
              pattern: {
                value: /^[0-9]{5}$/,
                message: "El código postal debe tener 5 dígitos",
              },
            })}
            placeholder="Código Postal"
            className="w-full p-2 border border-gray-300 rounded"
            id="cp"
          />
          {errors.postalCode && (
            <p className="text-red-500 text-sm border-1 border-red-500 rounded bg-red-100 p-2">
              {errors.postalCode.message}
            </p>
          )}
          <label htmlFor="password" className="block text-gray-700 text-sm">
            Contraseña
          </label>
          <input
            type="password"
            {...register("password", {
              required: "La contraseña es obligatoria",
            })}
            placeholder="Contraseña"
            className="w-full p-2 border border-gray-300 rounded"
            id="password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm border-1 border-red-500 rounded bg-red-100 p-2">
              {errors.password.message}
            </p>
          )}
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 text-sm"
          >
            Confirmar Contraseña
          </label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Por favor, confirma tu contraseña",
              validate: (value) =>
                value === watch("password") || "Las contraseñas no coinciden",
            })}
            placeholder="Confirmar Contraseña"
            className="w-full p-2 border border-gray-300 rounded"
            id="confirmPassword"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm border-1 border-red-500 rounded bg-red-100 p-2">
              {errors.confirmPassword.message}
            </p>
          )}

          <Button type="submit" text="Registrarse" className="w-full" />
        </form>
      </div>
    </section>
  );
}

export default RegisterForm;
