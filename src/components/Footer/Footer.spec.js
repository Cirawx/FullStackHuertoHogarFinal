import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Footer from "./Footer"

describe("Footer Component", () => {
  it("debería renderizar el nombre de la empresa", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    )

    const companyNames = screen.getAllByText(/HuertoHogar/i)
    expect(companyNames.length).toBeGreaterThan(0)
  })

  it("debería mostrar la misión de la empresa", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    )

    const mission = screen.getByText(/Conectando familias chilenas con el campo/i)
    expect(mission).toBeTruthy()
  })

  it("debería tener enlaces rápidos", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    )

    expect(screen.getByText(/Enlaces Rápidos/i)).toBeTruthy()
  })

  it("debería mostrar información de contacto", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    )

    const contactElements = screen.getAllByText(/Contacto/i)
    expect(contactElements.length).toBeGreaterThan(0)
    expect(screen.getByText(/contacto@huertohogar.cl/i)).toBeTruthy()
  })

  it("debería mostrar el año actual en el copyright", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    )

    const currentYear = new Date().getFullYear()
    const copyright = screen.getByText(new RegExp(currentYear.toString()))
    expect(copyright).toBeTruthy()
  })
})
