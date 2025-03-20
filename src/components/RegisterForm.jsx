import { useForm } from "react-hook-form";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../services/api";

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
      const formData = { ...data };
      delete formData.confirmPassword;
      setEmailExist("");

      const response = await registerUser(formData);
      console.log("Registro Exitoso:", response);
      navigate("/login");
    } catch (error) {
      if (error.status === 409) {
        setEmailExist("El correo ya está registrado.");
      } else {
        console.error("Error en el Registro:", error);
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-cover bg-center bg-[url(/assets/bgLoginRegister.png)]">
      <div className="max-w-md mx-auto p-8 bg-[#ECFDF5] shadow-md rounded-3xl border border-green-300 backdrop-blur-lg bg-opacity-80">
        <h2 className="text-3xl font-bold text-center text-[#064E3B] mb-2">
          Registro de Usuario
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <label
            htmlFor="name"
            className="block text-[#059669] text-sm font-medium"
          >
            Nombre Completo
          </label>
          <input
            type="text"
            {...register("name", { required: "El nombre es obligatorio" })}
            placeholder="Nombre Completo"
            className="w-full p-3 border border-[#A7F3D0] rounded-lg"
            id="name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm border-1 border-red-500 rounded bg-red-100 p-2">
              {errors.name.message}
            </p>
          )}
          <label
            htmlFor="email"
            className="block text-[#059669] text-sm font-medium"
          >
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
            className="w-full p-3 border border-[#A7F3D0] rounded-lg"
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
          <label
            htmlFor="address"
            className="block text-[#059669] text-sm font-medium"
          >
            Dirección
          </label>
          <input
            type="text"
            {...register("address", {
              required: "La dirección es obligatoria",
            })}
            placeholder="Dirección"
            className="w-full p-3 border border-[#A7F3D0] rounded-lg"
            id="address"
          />
          {errors.address && (
            <p className="text-red-500 text-sm border-1 border-red-500 rounded bg-red-100 p-2">
              {errors.address.message}
            </p>
          )}
          <label
            htmlFor="cp"
            className="block text-[#059669] text-sm font-medium"
          >
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
            className="w-full p-3 border border-[#A7F3D0] rounded-lg"
            id="cp"
          />
          {errors.postalCode && (
            <p className="text-red-500 text-sm border-1 border-red-500 rounded bg-red-100 p-2">
              {errors.postalCode.message}
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
            {...register("password", {
              required: "La contraseña es obligatoria",
            })}
            placeholder="Contraseña"
            className="w-full p-3 border border-[#A7F3D0] rounded-lg"
            id="password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm border-1 border-red-500 rounded bg-red-100 p-2">
              {errors.password.message}
            </p>
          )}
          <label
            htmlFor="confirmPassword"
            className="block text-[#059669] text-sm font-medium"
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
            className="w-full p-3 border border-[#A7F3D0] rounded-lg"
            id="confirmPassword"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm border-1 border-red-500 rounded bg-red-100 p-2">
              {errors.confirmPassword.message}
            </p>
          )}
          <p className="text-xs text-[#059669] text-center mt-4">
            Al Registrarte, aceptas nuestros{" "}
            <a href="#" className="text-green-700 underline">
              Terminos de servicio
            </a>{" "}
            y{" "}
            <a href="#" className="text-green-700 underline">
              Políticas de Privacidad
            </a>
            .
          </p>
          <Button type="submit" text="Registrarse" className="w-full" />
        </form>
      </div>
    </section>
  );
}

export default RegisterForm;
