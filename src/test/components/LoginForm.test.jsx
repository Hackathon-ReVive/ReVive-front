import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import { loginUser } from "../../services/api";

jest.mock("../../services/api", () => ({
  loginUser: jest.fn(),
}));

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("LoginForm Component", () => {
  
  test("shows validation errors when submitting empty fields", async () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /Continuar con Email/i }));

    expect(await screen.findByText(/Email es obligatorio/i)).toBeInTheDocument();
    expect(await screen.findByText(/Contraseña es obligatoria/i)).toBeInTheDocument();
  });

  
  test("calls loginUser when form is submitted with valid data", async () => {
    loginUser.mockResolvedValueOnce({ token: "mockToken" });

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Email Address"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "password123" } });
    fireEvent.click(screen.getByRole("button", { name: /Continuar con Email/i }));

    await waitFor(() => {
      expect(loginUser).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "password123",
      });
    });
  });

  test("navigates to register page when 'No tengo cuenta' button is clicked", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
  
    fireEvent.click(screen.getByRole("button", { name: /No tengo cuenta/i }));
  
    expect(mockNavigate).toHaveBeenCalledWith("/register");
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

});

