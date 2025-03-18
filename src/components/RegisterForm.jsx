import { useForm } from "react-hook-form";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await axios.post("AQUI VA LA API", data);
      console.log("Registro Exitoso:", response.data);
      navigate("/login");
    } catch (error) {
      console.error(
        "Error en el Registro:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md border-stone-200 mt-50">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
        Registro de Usuario
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="text"
          {...register("name", { required: "El nombre es obligatorio" })}
          placeholder="Nombre Completo"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}

        <input
          type="email"
          {...register("email", { required: "El correo es obligatorio" })}
          placeholder="Correo Electrónico"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <input
          type="password"
          {...register("password", {
            required: "La contraseña es obligatoria",
          })}
          placeholder="Contraseña"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <input
          type="password"
          {...register("confirmPassword", {
            required: "Por favor, confirma tu contraseña",
            validate: (value) =>
              value === watch("password") || "Las contraseñas no coinciden",
          })}
          placeholder="Confirmar Contraseña"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}

        <Button type="submit" text="Registrarse" className="w-full" />
      </form>
    </div>
  );
}

export default RegisterForm;
