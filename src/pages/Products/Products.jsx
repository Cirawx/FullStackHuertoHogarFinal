"use client"

import { useState, useEffect } from "react"
import { Container, Row, Col, Form, Card, Button, Badge } from "react-bootstrap"
import { Link, useSearchParams } from "react-router-dom"
import { products, categories } from "../../data/products"
import "./Products.css"

function Products({ addToCart }) {
  const [searchParams] = useSearchParams()
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("categoria") || "all")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("name")

  useEffect(() => {
    let result = [...products]

    // Filtrar por categoría
    if (selectedCategory !== "all") {
      result = result.filter((product) => product.category === selectedCategory)
    }

    // Filtrar por búsqueda
    if (searchTerm) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Ordenar
    result.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name)
      } else if (sortBy === "price-asc") {
        return a.price - b.price
      } else if (sortBy === "price-desc") {
        return b.price - a.price
      }
      return 0
    })

    setFilteredProducts(result)
  }, [selectedCategory, searchTerm, sortBy])

  const handleAddToCart = (product) => {
    addToCart(product, 1)
    // Mostrar feedback visual (opcional)
    alert(`${product.name} agregado al carrito`)
  }

  return (
    <div className="products-page">
      <Container>
        <Row className="mb-4">
          <Col>
            <h1 className="page-title">Nuestros Productos</h1>
            <p className="text-secondary-custom">Descubre nuestra selección de productos frescos del campo</p>
          </Col>
        </Row>

        {/* Filtros y búsqueda */}
        <Row className="mb-4">
          <Col md={4} className="mb-3">
            <Form.Group>
              <Form.Label>Buscar Productos</Form.Label>
              <Form.Control
                type="text"
                placeholder="Buscar por nombre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={4} className="mb-3">
            <Form.Group>
              <Form.Label>Categoría</Form.Label>
              <Form.Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="all">Todas las categorías</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4} className="mb-3">
            <Form.Group>
              <Form.Label>Ordenar por</Form.Label>
              <Form.Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="name">Nombre (A-Z)</option>
                <option value="price-asc">Precio (Menor a Mayor)</option>
                <option value="price-desc">Precio (Mayor a Menor)</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {/* Resultados */}
        <Row className="mb-3">
          <Col>
            <p className="text-secondary-custom">
              Mostrando {filteredProducts.length} producto{filteredProducts.length !== 1 ? "s" : ""}
            </p>
          </Col>
        </Row>

        {/* Grid de productos */}
        <Row>
          {filteredProducts.length === 0 ? (
            <Col className="text-center py-5">
              <i className="bi bi-search" style={{ fontSize: "3rem", color: "var(--color-text-secondary)" }}></i>
              <p className="mt-3 text-secondary-custom">No se encontraron productos</p>
            </Col>
          ) : (
            filteredProducts.map((product) => (
              <Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
                <Card className="product-card h-100 shadow-sm">
                  <Link to={`/producto/${product.id}`} className="product-image-link">
                    <Card.Img variant="top" src={product.image} alt={product.name} className="product-image" />
                  </Link>
                  <Card.Body className="d-flex flex-column">
                    <div className="mb-2">
                      {product.sustainable && (
                        <Badge bg="success" className="me-2">
                          <i className="bi bi-leaf"></i> Sostenible
                        </Badge>
                      )}
                      {product.stock < 50 && (
                        <Badge bg="warning" text="dark">
                          Pocas unidades
                        </Badge>
                      )}
                    </div>
                    <Card.Title className="product-title">
                      <Link to={`/producto/${product.id}`} className="text-decoration-none">
                        {product.name}
                      </Link>
                    </Card.Title>
                    <Card.Text className="text-secondary-custom small flex-grow-1">
                      {product.description.substring(0, 80)}...
                    </Card.Text>
                    <div className="product-footer mt-auto">
                      <div className="product-price mb-2">
                        <strong>${product.price.toLocaleString("es-CL")}</strong>
                        <span className="text-secondary-custom small"> / {product.unit}</span>
                      </div>
                      <div className="d-flex gap-2">
                        <Button
                          variant="primary"
                          size="sm"
                          className="flex-grow-1"
                          onClick={() => handleAddToCart(product)}
                          disabled={product.stock === 0}
                        >
                          <i className="bi bi-cart-plus"></i> Agregar
                        </Button>
                        <Button as={Link} to={`/producto/${product.id}`} variant="outline-primary" size="sm">
                          <i className="bi bi-eye"></i>
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  )
}

export default Products
