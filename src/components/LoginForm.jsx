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
    <div className="max-w-md mx-auto mt-16 p-8 bg-green-100 shadow-md rounded-xl border border-green-300">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
        Login
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-medium"
        >
          Correo Electrónico
        </label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "Email es obligatorio" })}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
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
