"use client"

import { useState } from "react"
import { Container, Row, Col, Form, Button, Alert, Card } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import "./Login.css"

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    // Validación básica
    if (!formData.email || !formData.password) {
      setError("Por favor completa todos los campos")
      return
    }

    // Obtener usuarios registrados
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const user = users.find((u) => u.email === formData.email && u.password === formData.password)

    if (user) {
      const userData = {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      }
      onLogin(userData)
      navigate("/")
    } else {
      setError("Credenciales incorrectas")
    }
  }

  return (
    <div className="login-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="login-card shadow">
              <Card.Body className="p-5">
                <h2 className="text-center mb-4">Iniciar Sesión</h2>
                <p className="text-center text-secondary-custom mb-4">Accede a tu cuenta de HuertoHogar</p>

                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100 mb-3">
                    Iniciar Sesión
                  </Button>

                  <div className="text-center">
                    <p className="mb-0">
                      ¿No tienes cuenta?{" "}
                      <Link to="/registro" className="text-primary-custom">
                        Regístrate aquí
                      </Link>
                    </p>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login
