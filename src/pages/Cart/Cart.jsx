"use client"

import { Container, Row, Col, Card, Button, Table, Form } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import "./Cart.css"

function Cart({ cart, updateQuantity, removeFromCart }) {
  const navigate = useNavigate()

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

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      if (window.confirm("¿Deseas eliminar este producto del carrito?")) {
        removeFromCart(productId)
      }
    } else {
      updateQuantity(productId, newQuantity)
    }
  }

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Tu carrito está vacío")
      return
    }
    navigate("/checkout")
  }

  return (
    <div className="cart-page">
      <Container>
        <Row className="mb-4">
          <Col>
            <h1 className="page-title">Carrito de Compras</h1>
          </Col>
        </Row>

        {cart.length === 0 ? (
          <Row>
            <Col>
              <Card className="empty-cart-card shadow-sm text-center">
                <Card.Body className="py-5">
                  <i className="bi bi-cart-x empty-cart-icon"></i>
                  <h3 className="mt-4 mb-3">Tu carrito está vacío</h3>
                  <p className="text-secondary-custom mb-4">Agrega productos frescos del campo a tu carrito</p>
                  <Button as={Link} to="/productos" variant="primary" size="lg">
                    Ver Productos
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col lg={8} className="mb-4">
              <Card className="cart-items-card shadow-sm">
                <Card.Body>
                  <Table responsive className="cart-table">
                    <thead>
                      <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <div className="cart-item-info">
                              <img src={item.image || "/placeholder.svg"} alt={item.name} className="cart-item-image" />
                              <div>
                                <Link to={`/producto/${item.id}`} className="cart-item-name">
                                  {item.name}
                                </Link>
                                <p className="cart-item-unit text-secondary-custom mb-0">{item.unit}</p>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <strong>${item.price.toLocaleString("es-CL")}</strong>
                          </td>
                          <td className="align-middle">
                            <div className="quantity-controls">
                              <Button
                                variant="outline-secondary"
                                size="sm"
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              >
                                <i className="bi bi-dash"></i>
                              </Button>
                              <Form.Control
                                type="number"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, Number.parseInt(e.target.value) || 1)}
                                min="1"
                                max={item.stock}
                                className="quantity-input"
                              />
                              <Button
                                variant="outline-secondary"
                                size="sm"
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                disabled={item.quantity >= item.stock}
                              >
                                <i className="bi bi-plus"></i>
                              </Button>
                            </div>
                          </td>
                          <td className="align-middle">
                            <strong className="text-primary-custom">
                              ${(item.price * item.quantity).toLocaleString("es-CL")}
                            </strong>
                          </td>
                          <td className="align-middle">
                            <Button
                              variant="outline-danger"
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                              title="Eliminar producto"
                            >
                              <i className="bi bi-trash"></i>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="cart-summary-card shadow-sm sticky-top">
                <Card.Body>
                  <h4 className="mb-4">Resumen del Pedido</h4>

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

                  {calculateShipping() > 0 && (
                    <div className="shipping-notice">
                      <i className="bi bi-info-circle"></i>
                      <small>Envío gratis en compras sobre $20.000</small>
                    </div>
                  )}

                  <hr />

                  <div className="summary-row total-row">
                    <span>Total:</span>
                    <strong className="total-amount">${calculateTotal().toLocaleString("es-CL")} CLP</strong>
                  </div>

                  <Button variant="primary" size="lg" className="w-100 mt-3" onClick={handleCheckout}>
                    Proceder al Pago
                  </Button>

                  <Button as={Link} to="/productos" variant="outline-primary" size="lg" className="w-100 mt-2">
                    Seguir Comprando
                  </Button>

                  <div className="payment-methods mt-4">
                    <p className="text-secondary-custom small mb-2">Métodos de pago aceptados:</p>
                    <div className="payment-icons">
                      <i className="bi bi-credit-card"></i>
                      <i className="bi bi-wallet2"></i>
                      <i className="bi bi-bank"></i>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  )
}

export default Cart
