"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { Container, Row, Col, Button, Badge, Form, Card, Alert } from "react-bootstrap"
import { products } from "../../data/products"
import "./ProductDetail.css"

function ProductDetail({ addToCart }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === id)
    if (foundProduct) {
      setProduct(foundProduct)
      // Productos relacionados de la misma categoría
      const related = products
        .filter((p) => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4)
      setRelatedProducts(related)
    } else {
      navigate("/productos")
    }
  }, [id, navigate])

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity)
      setShowAlert(true)
      setTimeout(() => setShowAlert(false), 3000)
    }
  }

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, Math.min(value, product.stock))
    setQuantity(newQuantity)
  }

  if (!product) {
    return null
  }

  return (
    <div className="product-detail-page">
      <Container>
        {showAlert && (
          <Alert variant="success" dismissible onClose={() => setShowAlert(false)} className="mb-4">
            <i className="bi bi-check-circle"></i> Producto agregado al carrito correctamente
          </Alert>
        )}

        <Row className="mb-4">
          <Col>
            <Link to="/productos" className="text-primary-custom text-decoration-none">
              <i className="bi bi-arrow-left"></i> Volver a productos
            </Link>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6} className="mb-4">
            <div className="product-detail-image">
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="img-fluid rounded shadow" />
            </div>
          </Col>
          <Col md={6}>
            <div className="product-detail-info">
              <div className="mb-3">
                {product.sustainable && (
                  <Badge bg="success" className="me-2">
                    <i className="bi bi-leaf"></i> Producto Sostenible
                  </Badge>
                )}
                {product.stock < 50 && product.stock > 0 && (
                  <Badge bg="warning" text="dark">
                    Pocas unidades disponibles
                  </Badge>
                )}
                {product.stock === 0 && <Badge bg="danger">Agotado</Badge>}
              </div>

              <h1 className="product-detail-title">{product.name}</h1>
              <p className="product-detail-code text-secondary-custom">Código: {product.id}</p>

              <div className="product-detail-price mb-4">
                <h2 className="price-amount">${product.price.toLocaleString("es-CL")}</h2>
                <span className="price-unit text-secondary-custom">por {product.unit}</span>
              </div>

              <div className="product-detail-description mb-4">
                <h5>Descripción</h5>
                <p className="text-secondary-custom">{product.description}</p>
              </div>

              <Row className="mb-4">
                <Col md={6}>
                  <div className="product-info-item">
                    <strong>Origen:</strong>
                    <p className="text-secondary-custom mb-0">{product.origin}</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="product-info-item">
                    <strong>Stock disponible:</strong>
                    <p className="text-secondary-custom mb-0">{product.stock} unidades</p>
                  </div>
                </Col>
              </Row>

              {product.stock > 0 && (
                <div className="product-actions">
                  <Form.Group className="mb-3">
                    <Form.Label>Cantidad</Form.Label>
                    <div className="quantity-selector">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleQuantityChange(quantity - 1)}
                        disabled={quantity <= 1}
                      >
                        <i className="bi bi-dash"></i>
                      </Button>
                      <Form.Control
                        type="number"
                        value={quantity}
                        onChange={(e) => handleQuantityChange(Number.parseInt(e.target.value) || 1)}
                        min="1"
                        max={product.stock}
                        className="quantity-input"
                      />
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleQuantityChange(quantity + 1)}
                        disabled={quantity >= product.stock}
                      >
                        <i className="bi bi-plus"></i>
                      </Button>
                    </div>
                  </Form.Group>

                  <div className="d-flex gap-2">
                    <Button variant="primary" size="lg" className="flex-grow-1" onClick={handleAddToCart}>
                      <i className="bi bi-cart-plus"></i> Agregar al Carrito
                    </Button>
                    <Button variant="outline-primary" size="lg" as={Link} to="/carrito">
                      <i className="bi bi-cart"></i>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>

        {/* Productos relacionados */}
        {relatedProducts.length > 0 && (
          <div className="related-products">
            <h3 className="section-title mb-4">Productos Relacionados</h3>
            <Row>
              {relatedProducts.map((relatedProduct) => (
                <Col key={relatedProduct.id} sm={6} md={3} className="mb-4">
                  <Card className="product-card h-100 shadow-sm">
                    <Link to={`/producto/${relatedProduct.id}`}>
                      <Card.Img
                        variant="top"
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="product-image"
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title className="product-title">
                        <Link to={`/producto/${relatedProduct.id}`} className="text-decoration-none">
                          {relatedProduct.name}
                        </Link>
                      </Card.Title>
                      <div className="product-price">
                        <strong>${relatedProduct.price.toLocaleString("es-CL")}</strong>
                        <span className="text-secondary-custom small"> / {relatedProduct.unit}</span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}

        {/* Información adicional */}
        <Row className="mt-5">
          <Col md={4} className="mb-4">
            <Card className="info-card shadow-sm">
              <Card.Body className="text-center">
                <i className="bi bi-truck info-icon"></i>
                <h5>Envío Rápido</h5>
                <p className="text-secondary-custom mb-0">Entrega en 24-48 horas</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="info-card shadow-sm">
              <Card.Body className="text-center">
                <i className="bi bi-shield-check info-icon"></i>
                <h5>Calidad Garantizada</h5>
                <p className="text-secondary-custom mb-0">Productos frescos certificados</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="info-card shadow-sm">
              <Card.Body className="text-center">
                <i className="bi bi-arrow-repeat info-icon"></i>
                <h5>Devoluciones</h5>
                <p className="text-secondary-custom mb-0">Garantía de satisfacción</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetail
