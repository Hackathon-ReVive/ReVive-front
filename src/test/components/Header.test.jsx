import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../../components/Header";
import { CartContext } from "../../CartContext";
import { UserContext } from "../../UserContext";
import { waitFor } from "@testing-library/react";

describe("Header Component", () => {
    test("renders logo and title", () => {
        render(
            <BrowserRouter>
                <CartContext.Provider value={{ cart: [] }}>
                    <UserContext.Provider value={{ user: null }}>
                        <Header />
                    </UserContext.Provider>
                </CartContext.Provider>
            </BrowserRouter>
        );

        expect(screen.getByAltText("Logo de ReVive")).toBeInTheDocument();
        expect(screen.getByText(/ReVive/i)).toBeInTheDocument();
    });

    test("renders navigation links", () => {
        render(
            <BrowserRouter>
                <CartContext.Provider value={{ cart: [] }}>
                    <UserContext.Provider value={{ user: null }}>
                        <Header />
                    </UserContext.Provider>
                </CartContext.Provider>
            </BrowserRouter>
        );

        expect(screen.getByText(/Inicio/i)).toBeInTheDocument();
        expect(screen.getByText(/Productos/i)).toBeInTheDocument();
        expect(screen.getByText(/Sobre nosotres/i)).toBeInTheDocument();
    });

    test("renders login and register buttons when user is not logged in", () => {
        render(
            <BrowserRouter>
                <CartContext.Provider value={{ cart: [] }}>
                    <UserContext.Provider value={{ user: null }}>
                        <Header />
                    </UserContext.Provider>
                </CartContext.Provider>
            </BrowserRouter>
        );

        expect(screen.getByText(/Registrarse/i)).toBeInTheDocument();
        expect(screen.getByText(/Iniciar sesión/i)).toBeInTheDocument();
    });

    test("renders username and logout button when user is logged in", () => {
        const mockLogout = jest.fn();
        render(
            <BrowserRouter>
                <CartContext.Provider value={{ cart: [] }}>
                    <UserContext.Provider value={{ user: { username: "Lanny" }, logout: mockLogout }}>
                        <Header />
                    </UserContext.Provider>
                </CartContext.Provider>
            </BrowserRouter>
        );

        expect(screen.getByText(/Bienvenido, Lanny/i)).toBeInTheDocument();
        expect(screen.getByText(/Cerrar sesión/i)).toBeInTheDocument();
    });

    test("calls logout function when logout button is clicked", () => {
        const mockLogout = jest.fn();
        render(
            <BrowserRouter>
                <CartContext.Provider value={{ cart: [] }}>
                    <UserContext.Provider value={{ user: { username: "Lanny" }, logout: mockLogout }}>
                        <Header />
                    </UserContext.Provider>
                </CartContext.Provider>
            </BrowserRouter>
        );

        fireEvent.click(screen.getByText(/Cerrar sesión/i));
        expect(mockLogout).toHaveBeenCalled();
    });

    test("displays cart count when there are items in the cart", () => {
        render(
            <BrowserRouter>
                <CartContext.Provider value={{ cart: [1, 2, 3] }}>
                    <UserContext.Provider value={{ user: null }}>
                        <Header />
                    </UserContext.Provider>
                </CartContext.Provider>
            </BrowserRouter>
        );

        expect(screen.getByText("3")).toBeInTheDocument();
    });

    test("toggles mobile menu when clicking menu button", async () => {
        render(
            <BrowserRouter>
                <CartContext.Provider value={{ cart: [] }}>
                    <UserContext.Provider value={{ user: null }}>
                        <Header />
                    </UserContext.Provider>
                </CartContext.Provider>
            </BrowserRouter>
        );

        const menuButton = screen.getByRole("button");
        const navMenu = screen.getByRole("navigation");

        fireEvent.click(menuButton);
        expect(navMenu).not.toHaveClass("hidden");

        fireEvent.click(menuButton);

        await waitFor(() => {
            expect(navMenu).toHaveClass("hidden");
        });
    });
    test("matches snapshot", () => {
        const { asFragment } = render(
            <BrowserRouter>
                <CartContext.Provider value={{ cart: [] }}>
                    <UserContext.Provider value={{ user: null }}>
                        <Header />
                    </UserContext.Provider>
                </CartContext.Provider>
            </BrowserRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

