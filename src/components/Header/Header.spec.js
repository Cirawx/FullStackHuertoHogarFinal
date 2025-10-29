import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "./Header"

describe("Header Component", () => {
  it("debería renderizar el logo de HuertoHogar", () => {
    render(
      <BrowserRouter>
        <Header user={null} onLogout={() => {}} cartCount={0} />
      </BrowserRouter>,
    )

    const logo = screen.getByText(/HuertoHogar/i)
    expect(logo).toBeTruthy()
  })

  it("debería mostrar el enlace de Login cuando no hay usuario", () => {
    render(
      <BrowserRouter>
        <Header user={null} onLogout={() => {}} cartCount={0} />
      </BrowserRouter>,
    )

    const loginLink = screen.getByText(/Iniciar Sesión/i)
    expect(loginLink).toBeTruthy()
  })

  it("debería mostrar el nombre del usuario cuando está autenticado", () => {
    const mockUser = { name: "Juan Pérez", email: "juan@example.com" }

    render(
      <BrowserRouter>
        <Header user={mockUser} onLogout={() => {}} cartCount={0} />
      </BrowserRouter>,
    )

    const userName = screen.getByText(/Juan Pérez/i)
    expect(userName).toBeTruthy()
  })

  it("debería mostrar el contador del carrito correctamente", () => {
    render(
      <BrowserRouter>
        <Header user={null} onLogout={() => {}} cartCount={5} />
      </BrowserRouter>,
    )

    const cartCount = screen.getByText("5")
    expect(cartCount).toBeTruthy()
  })

  it("debería tener enlaces de navegación principales", () => {
    render(
      <BrowserRouter>
        <Header user={null} onLogout={() => {}} cartCount={0} />
      </BrowserRouter>,
    )

    expect(screen.getByText(/Inicio/i)).toBeTruthy()
    expect(screen.getByText(/Productos/i)).toBeTruthy()
    expect(screen.getByText(/Nosotros/i)).toBeTruthy()
    expect(screen.getByText(/Blog/i)).toBeTruthy()
  })
})
