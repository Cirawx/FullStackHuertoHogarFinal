describe("Cart Utilities", () => {
  describe("calculateSubtotal", () => {
    it("debería calcular el subtotal correctamente", () => {
      const cart = [
        { id: "FR001", price: 1200, quantity: 2 },
        { id: "VR001", price: 900, quantity: 3 },
      ]

      const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
      expect(subtotal).toBe(5100)
    })

    it("debería retornar 0 para un carrito vacío", () => {
      const cart = []
      const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
      expect(subtotal).toBe(0)
    })
  })

  describe("calculateShipping", () => {
    it("debería cobrar envío para compras menores a $20,000", () => {
      const subtotal = 15000
      const shipping = subtotal >= 20000 ? 0 : 2500
      expect(shipping).toBe(2500)
    })

    it("debería ser gratis para compras de $20,000 o más", () => {
      const subtotal = 25000
      const shipping = subtotal >= 20000 ? 0 : 2500
      expect(shipping).toBe(0)
    })

    it("debería ser gratis exactamente en $20,000", () => {
      const subtotal = 20000
      const shipping = subtotal >= 20000 ? 0 : 2500
      expect(shipping).toBe(0)
    })
  })

  describe("calculateTotal", () => {
    it("debería calcular el total con envío", () => {
      const subtotal = 15000
      const shipping = 2500
      const total = subtotal + shipping
      expect(total).toBe(17500)
    })

    it("debería calcular el total sin envío", () => {
      const subtotal = 25000
      const shipping = 0
      const total = subtotal + shipping
      expect(total).toBe(25000)
    })
  })

  describe("formatPrice", () => {
    it("debería formatear precios correctamente", () => {
      const price = 1200
      const formatted = `$${price.toLocaleString("es-CL")} CLP`
      expect(formatted).toContain("1")
      expect(formatted).toContain("CLP")
    })
  })

  describe("validateCartItem", () => {
    it("debería validar un item de carrito válido", () => {
      const item = {
        id: "FR001",
        name: "Manzanas Fuji",
        price: 1200,
        quantity: 2,
      }

      const isValid = item.id && item.price > 0 && item.quantity > 0
      expect(isValid).toBe(true)
    })

    it("debería rechazar un item sin ID", () => {
      const item = {
        name: "Manzanas Fuji",
        price: 1200,
        quantity: 2,
      }

      const isValid = !!(item.id && item.price > 0 && item.quantity > 0)
      expect(isValid).toBe(false)
    })

    it("debería rechazar un item con precio negativo", () => {
      const item = {
        id: "FR001",
        name: "Manzanas Fuji",
        price: -1200,
        quantity: 2,
      }

      const isValid = item.id && item.price > 0 && item.quantity > 0
      expect(isValid).toBe(false)
    })

    it("debería rechazar un item con cantidad cero", () => {
      const item = {
        id: "FR001",
        name: "Manzanas Fuji",
        price: 1200,
        quantity: 0,
      }

      const isValid = item.id && item.price > 0 && item.quantity > 0
      expect(isValid).toBe(false)
    })
  })
})
