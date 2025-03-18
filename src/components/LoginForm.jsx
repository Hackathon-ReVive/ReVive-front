import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
      const response = await axios.post("AQUI VA LA API", data);
      console.log("Login Exitoso:", response.data);
      navigate("/");
    } catch (error) {
      console.error(
        "Error en el Login:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="max-w-md mx-auto mt-50 p-6 bg-white shadow-md rounded-md border-1 border-stone-200">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
        Login
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm border-1 border-red-500 rounded bg-red-100 p-2">
            {errors.email.message}
          </p>
        )}

        <input
          type="password"
          {...register("password", { required: "Contraseña es obligatoria" })}
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm border-1 border-red-500 rounded bg-red-100 p-2">
            {errors.password.message}
          </p>
        )}

        <Button type="submit" text="Conectame" className="w-full" />
      </form>

      <Button
        text="No tengo cuenta"
        className="mt-4 border-teal-500 border-1 w-full"
        bgColor="bg-teal-200"
        txtColor="text-teal-600"
        onClick={() => navigate("/register")}
      />
    </div>
  );
}

export default LoginForm;
