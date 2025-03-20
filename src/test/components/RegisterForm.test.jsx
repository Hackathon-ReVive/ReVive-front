import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm";



jest.mock("../../services/api", () => ({
    registerUser: jest.fn(),
}));

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));

describe("RegisterForm Component", () => {
    test("renders the form with all input fields", () => {
        render(
            <MemoryRouter>
                <RegisterForm />
            </MemoryRouter>
        );

        expect(screen.getByPlaceholderText("Nombre Completo")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Correo Electrónico")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Dirección")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Código Postal")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Contraseña")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Confirmar Contraseña")).toBeInTheDocument();
    });

    test("shows validation errors when submitting empty fields", async () => {
        render(
            <MemoryRouter>
                <RegisterForm />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByRole("button", { name: /Registrarse/i }));

        expect(await screen.findByText(/El nombre es obligatorio/i)).toBeInTheDocument();
        expect(await screen.findByText(/El correo es obligatorio/i)).toBeInTheDocument();
        expect(await screen.findByText(/La dirección es obligatoria/i)).toBeInTheDocument();
        expect(await screen.findByText(/El código postal es obligatorio/i)).toBeInTheDocument();
        expect(await screen.findByText(/La contraseña es obligatoria/i)).toBeInTheDocument();
        expect(await screen.findByText(/Por favor, confirma tu contraseña/i)).toBeInTheDocument();
    });


    test("shows an error when passwords do not match", async () => {
        render(
            <MemoryRouter>
                <RegisterForm />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByPlaceholderText("Contraseña"), { target: { value: "password123" } });
        fireEvent.change(screen.getByPlaceholderText("Confirmar Contraseña"), { target: { value: "differentPassword" } });
        fireEvent.click(screen.getByRole("button", { name: /Registrarse/i }));

        expect(await screen.findByText(/Las contraseñas no coinciden/i)).toBeInTheDocument();
    });

});
