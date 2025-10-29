import { render } from "@testing-library/react"
import App from "./App"

describe("App Component", () => {
  it("debería renderizar sin errores", () => {
    render(<App />)
    expect(document.querySelector(".App")).toBeTruthy()
  })

  it("debería renderizar el Header", () => {
    render(<App />)
    const header = document.querySelector("header") || document.querySelector(".header")
    expect(header).toBeTruthy()
  })

  it("debería renderizar el Footer", () => {
    render(<App />)
    const footer = document.querySelector("footer") || document.querySelector(".footer")
    expect(footer).toBeTruthy()
  })

  it("debería tener el contenido principal", () => {
    render(<App />)
    const main = document.querySelector("main") || document.querySelector(".main-content")
    expect(main).toBeTruthy()
  })
})
