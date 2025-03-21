import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { loginUser } from "../services/apiServices";
import Button from "./Button";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await loginUser(data, login);
      navigate("/"); // Redirigir a home tras el login
    } catch (error) {
      console.error("Error en el Login:", error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-cover bg-center bg-[url(/assets/bgLoginRegister.png)]">
      <div className="max-w-md mx-auto p-8 bg-[#ECFDF5] shadow-md rounded-3xl border border-green-300 backdrop-blur-lg bg-opacity-80">
        <h1 class="w-full text-center text-emerald-900 text-4xl font-extrabold font-[Playfair_Display] leading-[46.8px]">
          Conéctate
        </h1>

        <p className="text-center text-[#059669] mb-4">
          ¡Dale vida nueva a tus productos!
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <label
            htmlFor="email"
            className="block text-[#059669] text-sm font-medium"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email es obligatorio",
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[a-zA-Z]{2,}$/i,
                message: "Formato de email inválido",
              },
            })}
            placeholder="Email Address"
            className="w-full p-3 border border-[#A7F3D0] rounded-lg"
            id="email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm border-1 border-red-500 rounded bg-red-100 p-2">
              {errors.email.message}
            </p>
          )}

        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-medium"
        >
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          {...register("password", { required: "Contraseña es obligatoria" })}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <Button
          type="submit"
          text="Iniciar sesión"
          className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
        />
      </form>
    </div>
  );
}

export default LoginForm;
