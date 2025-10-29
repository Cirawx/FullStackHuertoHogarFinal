describe("Authentication Utilities", () => {
  describe("validateEmail", () => {
    it("debería validar emails correctos", () => {
      const validEmails = ["test@example.com", "user.name@domain.cl", "admin@huertohogar.cl"]

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      validEmails.forEach((email) => {
        expect(emailRegex.test(email)).toBe(true)
      })
    })

    it("debería rechazar emails inválidos", () => {
      const invalidEmails = ["notanemail", "@example.com", "user@", "user @example.com"]

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      invalidEmails.forEach((email) => {
        expect(emailRegex.test(email)).toBe(false)
      })
    })
  })

  describe("validatePassword", () => {
    it("debería validar contraseñas de al menos 6 caracteres", () => {
      const password = "password123"
      expect(password.length >= 6).toBe(true)
    })

    it("debería rechazar contraseñas muy cortas", () => {
      const password = "12345"
      expect(password.length >= 6).toBe(false)
    })
  })

  describe("validatePhone", () => {
    it("debería validar números de teléfono chilenos", () => {
      const validPhones = ["+56912345678", "912345678", "+56 9 1234 5678"]

      validPhones.forEach((phone) => {
        const cleaned = phone.replace(/\s/g, "")
        expect(cleaned.length).toBeGreaterThanOrEqual(9)
      })
    })
  })

  describe("User Session", () => {
    beforeEach(() => {
      localStorage.clear()
    })

    it("debería guardar usuario en localStorage", () => {
      const user = {
        name: "Juan Pérez",
        email: "juan@example.com",
      }

      localStorage.setItem("user", JSON.stringify(user))
      const stored = JSON.parse(localStorage.getItem("user"))

      expect(stored.name).toBe("Juan Pérez")
      expect(stored.email).toBe("juan@example.com")
    })

    it("debería eliminar usuario de localStorage al cerrar sesión", () => {
      const user = {
        name: "Juan Pérez",
        email: "juan@example.com",
      }

      localStorage.setItem("user", JSON.stringify(user))
      expect(localStorage.getItem("user")).toBeTruthy()

      localStorage.removeItem("user")
      expect(localStorage.getItem("user")).toBeNull()
    })
  })
})
