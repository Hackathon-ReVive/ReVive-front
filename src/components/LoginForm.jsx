import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import Button from "./Button";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const userData = await loginUser(data);
      console.log("Login Exitoso:", userData);
      navigate("/");
    } catch (error) {
      console.error("Error en el Login:", error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-cover bg-center bg-[url(/assets/bgLoginRegister.png)]">
      <div className="max-w-md mx-auto p-8 bg-[#ECFDF5] shadow-md rounded-3xl border border-green-300 backdrop-blur-lg bg-opacity-80">
        <h2 className="text-3xl font-bold text-center text-[#064E3B] mb-2">
          Conéctate
        </h2>
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
            className="block text-[#059669] text-sm font-medium"
          >
            Contraseña
          </label>
          <input
            type="password"
            {...register("password", { required: "Contraseña es obligatoria" })}
            placeholder="Password"
            className="w-full p-3 border border-[#A7F3D0] rounded-lg bg-[#ECFDF5]"
            id="password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm border-1 border-red-500 rounded bg-red-100 p-2">
              {errors.password.message}
            </p>
          )}

          <Button
            type="submit"
            text="Continuar con Email"
            className="w-full text-white rounded-lg transition"
          />
        </form>
        <Button
          text="No tengo cuenta"
          className="mt-4 border-[#A7F3D0] border w-full rounded-lg"
          bgColor="bg-[#DCFCE7]"
          txtColor="text-teal-600"
          onClick={() => navigate("/register")}
        />
      </div>
    </section>
  );
}

export default LoginForm;
