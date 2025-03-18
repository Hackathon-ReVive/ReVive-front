/**
 * Login Form Component.
 *
 * This form allows users to log in by entering their credentials.
 * It includes a submit button and a button to navigate to the registration form.
 *
 * @module LoginForm
 * @author {Ángel Aragón}
 */

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

/**
 * LoginForm component that allows users to enter their credentials and log in.
 *
 * @function LoginForm
 * @returns {JSX.Element} The rendered login form component.
 */
function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Logging in:", data);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
        Login
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          placeholder="Email Address"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <input
          type="password"
          {...register("password", { required: "Password is required" })}
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <Button type="submit" text="Conectame" />
      </form>

      <Button
        text="No tengo cuenta"
        className="mt-4 text-teal-500 hover:text-teal-700 bg-transparent"
        onClick={() => navigate("/register")}
      />
    </div>
  );
}

export default LoginForm;
