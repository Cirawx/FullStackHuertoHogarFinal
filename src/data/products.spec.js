import { products, categories } from "./products"

describe("Products Data", () => {
  it("debería tener productos definidos", () => {
    expect(products).toBeDefined()
    expect(products.length).toBeGreaterThan(0)
  })

  it("debería tener categorías definidas", () => {
    expect(categories).toBeDefined()
    expect(categories.length).toBeGreaterThan(0)
  })

  it("cada producto debería tener las propiedades requeridas", () => {
    products.forEach((product) => {
      expect(product.id).toBeDefined()
      expect(product.name).toBeDefined()
      expect(product.price).toBeDefined()
      expect(product.category).toBeDefined()
      expect(product.stock).toBeDefined()
      expect(product.description).toBeDefined()
    })
  })

  it("debería tener el producto FR001 - Manzanas Fuji", () => {
    const manzanas = products.find((p) => p.id === "FR001")
    expect(manzanas).toBeDefined()
    expect(manzanas.name).toBe("Manzanas Fuji")
    expect(manzanas.price).toBe(1200)
  })

  it("debería tener el producto VR001 - Zanahorias Orgánicas", () => {
    const zanahorias = products.find((p) => p.id === "VR001")
    expect(zanahorias).toBeDefined()
    expect(zanahorias.name).toBe("Zanahorias Orgánicas")
    expect(zanahorias.category).toBe("Verduras Orgánicas")
  })

  it("todos los precios deberían ser números positivos", () => {
    products.forEach((product) => {
      expect(typeof product.price).toBe("number")
      expect(product.price).toBeGreaterThan(0)
    })
  })

  it("todos los stocks deberían ser números no negativos", () => {
    products.forEach((product) => {
      expect(typeof product.stock).toBe("number")
      expect(product.stock).toBeGreaterThanOrEqual(0)
    })
  })

  it("debería tener exactamente 4 categorías", () => {
    expect(categories.length).toBe(4)
    const categoryNames = categories.map((cat) => cat.name)
    expect(categoryNames).toContain("Frutas Frescas")
    expect(categoryNames).toContain("Verduras Orgánicas")
    expect(categoryNames).toContain("Productos Orgánicos")
    expect(categoryNames).toContain("Productos Lácteos")
  })

  it("debería tener al menos 9 productos", () => {
    expect(products.length).toBeGreaterThanOrEqual(9)
  })
})
