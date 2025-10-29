"use client"

import { useState, useEffect } from "react"
import { Container, Row, Col, Card, Form, Button, Alert, Tab, Tabs } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "./Profile.css"

function Profile({ user }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  })
  const [orders, setOrders] = useState([])
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate("/login")
      return
    }

    setFormData({
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
      address: user.address || "",
    })

    // Cargar pedidos del usuario
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const currentUser = users.find((u) => u.id === user.id)
    if (currentUser && currentUser.orders) {
      setOrders(currentUser.orders)
    }
  }, [user, navigate])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    // Actualizar usuario en localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const userIndex = users.findIndex((u) => u.id === user.id)

    if (userIndex !== -1) {
      users[userIndex] = {
        ...users[userIndex],
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
      }
      localStorage.setItem("users", JSON.stringify(users))

      // Actualizar usuario en sesión
      const updatedUser = {
        ...user,
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
      }
      localStorage.setItem("user", JSON.stringify(updatedUser))

      setSuccess("Perfil actualizado correctamente")
    } else {
      setError("Error al actualizar el perfil")
    }
  }

  if (!user) {
    return null
  }

  return (
    <div className="profile-page">
      <Container>
        <Row>
          <Col>
            <h1 className="page-title mb-4">Mi Perfil</h1>
          </Col>
        </Row>

        <Tabs defaultActiveKey="profile" className="mb-4">
          <Tab eventKey="profile" title="Información Personal">
            <Card className="profile-card shadow-sm">
              <Card.Body className="p-4">
                {success && <Alert variant="success">{success}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Nombre Completo</Form.Label>
                        <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control type="email" name="email" value={formData.email} disabled />
                        <Form.Text className="text-muted">El correo electrónico no se puede modificar</Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+56 9 1234 5678"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Dirección de Entrega</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Calle, número, comuna, ciudad"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Guardar Cambios
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Tab>

          <Tab eventKey="orders" title="Mis Pedidos">
            <Card className="profile-card shadow-sm">
              <Card.Body className="p-4">
                <h4 className="mb-4">Historial de Pedidos</h4>
                {orders.length === 0 ? (
                  <div className="text-center py-5">
                    <i className="bi bi-bag-x" style={{ fontSize: "3rem", color: "var(--color-text-secondary)" }}></i>
                    <p className="mt-3 text-secondary-custom">Aún no has realizado ningún pedido</p>
                    <Button variant="primary" onClick={() => navigate("/productos")}>
                      Ver Productos
                    </Button>
                  </div>
                ) : (
                  <div className="orders-list">
                    {orders.map((order) => (
                      <Card key={order.id} className="mb-3 order-item">
                        <Card.Body>
                          <Row>
                            <Col md={8}>
                              <h5>Pedido #{order.id}</h5>
                              <p className="text-secondary-custom mb-2">
                                Fecha: {new Date(order.date).toLocaleDateString("es-CL")}
                              </p>
                              <p className="mb-0">
                                <strong>Total:</strong> ${order.total.toLocaleString("es-CL")} CLP
                              </p>
                            </Col>
                            <Col md={4} className="text-md-end">
                              <span className={`badge bg-${order.status === "entregado" ? "success" : "warning"}`}>
                                {order.status}
                              </span>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                )}
              </Card.Body>
            </Card>
          </Tab>

          <Tab eventKey="recommendations" title="Recomendaciones">
            <Card className="profile-card shadow-sm">
              <Card.Body className="p-4">
                <h4 className="mb-4">Productos Recomendados para Ti</h4>
                <p className="text-secondary-custom">
                  Basado en tus compras anteriores, te recomendamos estos productos frescos y saludables.
                </p>
                <div className="text-center py-4">
                  <Button variant="primary" onClick={() => navigate("/productos")}>
                    Explorar Productos
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
      </Container>
    </div>
  )
}

export default Profile
