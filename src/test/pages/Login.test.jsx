
import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../../pages/Login";
import LoginForm from "../../components/LoginForm";

jest.mock("../../components/LoginForm", () => () => <div data-testid="login-form">LoginForm Mock</div>);

describe("Login Page Component", () => {
  
  test("renders without crashing", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByTestId("login-form")).toBeInTheDocument();
  });

  test("contains LoginForm component", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByText("LoginForm Mock")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

});
