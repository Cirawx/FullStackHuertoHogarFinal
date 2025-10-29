"use client"

import { useState, useEffect } from "react"
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "./Checkout.css"

function Checkout({ cart, user, clearCart }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    region: "",
    paymentMethod: "credit-card",
    deliveryDate: "",
  })
  const [errors, setErrors] = useState({})
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/carrito")
      return
    }

    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
      }))
    }
  }, [cart, user, navigate])

  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  const calculateShipping = () => {
    const subtotal = calculateSubtotal()
    return subtotal > 20000 ? 0 : 3000
  }

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping()
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Limpiar error del campo
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "El nombre es requerido"
    if (!formData.email.trim()) newErrors.email = "El email es requerido"
    if (!formData.phone.trim()) newErrors.phone = "El teléfono es requerido"
    if (!formData.address.trim()) newErrors.address = "La dirección es requerida"
    if (!formData.city.trim()) newErrors.city = "La ciudad es requerida"
    if (!formData.region.trim()) newErrors.region = "La región es requerida"
    if (!formData.deliveryDate) newErrors.deliveryDate = "Selecciona una fecha de entrega"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsProcessing(true)

    // Simular procesamiento de pago
    setTimeout(() => {
      const order = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        items: cart,
        total: calculateTotal(),
        status: "procesando",
        customer: formData,
      }

      // Guardar pedido en el historial del usuario
      if (user) {
        const users = JSON.parse(localStorage.getItem("users") || "[]")
        const userIndex = users.findIndex((u) => u.id === user.id)
        if (userIndex !== -1) {
          if (!users[userIndex].orders) {
            users[userIndex].orders = []
          }
          users[userIndex].orders.push(order)
          localStorage.setItem("users", JSON.stringify(users))
        }
      }

      // Limpiar carrito
      clearCart()

      // Redirigir a página de confirmación
      setIsProcessing(false)
      alert(`¡Pedido realizado con éxito! Número de pedido: ${order.id}`)
      navigate("/perfil")
    }, 2000)
  }

  if (cart.length === 0) {
    return null
  }

  return (
    <div className="checkout-page">
      <Container>
        <Row className="mb-4">
          <Col>
            <h1 className="page-title">Finalizar Compra</h1>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col lg={8} className="mb-4">
              {/* Información de contacto */}
              <Card className="checkout-card shadow-sm mb-4">
                <Card.Body>
                  <h4 className="section-title mb-4">
                    <i className="bi bi-person-circle"></i> Información de Contacto
                  </h4>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Nombre Completo *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          isInvalid={!!errors.name}
                          placeholder="Juan Pérez"
                        />
                        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                          placeholder="tu@email.com"
                        />
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Teléfono *</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          isInvalid={!!errors.phone}
                          placeholder="+56 9 1234 5678"
                        />
                        <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              {/* Dirección de entrega */}
              <Card className="checkout-card shadow-sm mb-4">
                <Card.Body>
                  <h4 className="section-title mb-4">
                    <i className="bi bi-geo-alt"></i> Dirección de Entrega
                  </h4>
                  <Row>
                    <Col md={12} className="mb-3">
                      <Form.Group>
                        <Form.Label>Dirección *</Form.Label>
                        <Form.Control
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          isInvalid={!!errors.address}
                          placeholder="Calle, número, departamento"
                        />
                        <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Ciudad *</Form.Label>
                        <Form.Control
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          isInvalid={!!errors.city}
                          placeholder="Santiago"
                        />
                        <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Región *</Form.Label>
                        <Form.Select
                          name="region"
                          value={formData.region}
                          onChange={handleChange}
                          isInvalid={!!errors.region}
                        >
                          <option value="">Selecciona una región</option>
                          <option value="metropolitana">Región Metropolitana</option>
                          <option value="valparaiso">Región de Valparaíso</option>
                          <option value="biobio">Región del Biobío</option>
                          <option value="araucania">Región de La Araucanía</option>
                          <option value="los-lagos">Región de Los Lagos</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">{errors.region}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Fecha de Entrega Preferida *</Form.Label>
                        <Form.Control
                          type="date"
                          name="deliveryDate"
                          value={formData.deliveryDate}
                          onChange={handleChange}
                          isInvalid={!!errors.deliveryDate}
                          min={new Date().toISOString().split("T")[0]}
                        />
                        <Form.Control.Feedback type="invalid">{errors.deliveryDate}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              {/* Método de pago */}
              <Card className="checkout-card shadow-sm">
                <Card.Body>
                  <h4 className="section-title mb-4">
                    <i className="bi bi-credit-card"></i> Método de Pago
                  </h4>
                  <Form.Group>
                    <Form.Check
                      type="radio"
                      id="credit-card"
                      name="paymentMethod"
                      value="credit-card"
                      label="Tarjeta de Crédito/Débito"
                      checked={formData.paymentMethod === "credit-card"}
                      onChange={handleChange}
                      className="mb-3"
                    />
                    <Form.Check
                      type="radio"
                      id="transfer"
                      name="paymentMethod"
                      value="transfer"
                      label="Transferencia Bancaria"
                      checked={formData.paymentMethod === "transfer"}
                      onChange={handleChange}
                      className="mb-3"
                    />
                    <Form.Check
                      type="radio"
                      id="cash"
                      name="paymentMethod"
                      value="cash"
                      label="Pago contra entrega"
                      checked={formData.paymentMethod === "cash"}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="checkout-summary-card shadow-sm sticky-top">
                <Card.Body>
                  <h4 className="mb-4">Resumen del Pedido</h4>

                  <div className="order-items mb-3">
                    {cart.map((item) => (
                      <div key={item.id} className="order-item">
                        <div className="order-item-info">
                          <img src={item.image || "/placeholder.svg"} alt={item.name} className="order-item-image" />
                          <div className="flex-grow-1">
                            <p className="order-item-name mb-0">{item.name}</p>
                            <small className="text-secondary-custom">Cantidad: {item.quantity}</small>
                          </div>
                          <strong>${(item.price * item.quantity).toLocaleString("es-CL")}</strong>
                        </div>
                      </div>
                    ))}
                  </div>

                  <hr />

                  <div className="summary-row">
                    <span>Subtotal:</span>
                    <strong>${calculateSubtotal().toLocaleString("es-CL")}</strong>
                  </div>

                  <div className="summary-row">
                    <span>Envío:</span>
                    <strong>
                      {calculateShipping() === 0 ? (
                        <span className="text-success">Gratis</span>
                      ) : (
                        `$${calculateShipping().toLocaleString("es-CL")}`
                      )}
                    </strong>
                  </div>

                  <hr />

                  <div className="summary-row total-row">
                    <span>Total:</span>
                    <strong className="total-amount">${calculateTotal().toLocaleString("es-CL")} CLP</strong>
                  </div>

                  <Button variant="primary" size="lg" type="submit" className="w-100 mt-3" disabled={isProcessing}>
                    {isProcessing ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Procesando...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-lock"></i> Confirmar Pedido
                      </>
                    )}
                  </Button>

                  <div className="security-notice mt-3">
                    <i className="bi bi-shield-check"></i>
                    <small>Pago seguro y protegido</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  )
}

export default Checkout
