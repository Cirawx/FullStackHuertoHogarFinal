"use client"

import { useState } from "react"
import { Container, Row, Col, Form, Button, Alert, Card } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import "./Register.css"

function Register({ onRegister }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
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

    // Validaciones
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Por favor completa todos los campos obligatorios")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden")
      return
    }

    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres")
      return
    }

    // Verificar si el email ya existe
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    if (users.find((u) => u.email === formData.email)) {
      setError("Este correo electrónico ya está registrado")
      return
    }

    // Crear nuevo usuario
    const newUser = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      address: formData.address,
      createdAt: new Date().toISOString(),
      orders: [],
    }

    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))

    // Login automático
    const userData = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
      address: newUser.address,
    }
    onRegister(userData)
    navigate("/")
  }

  return (
    <div className="register-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="register-card shadow">
              <Card.Body className="p-5">
                <h2 className="text-center mb-4">Crear Cuenta</h2>
                <p className="text-center text-secondary-custom mb-4">Únete a la familia HuertoHogar</p>

                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre Completo *</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Juan Pérez"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Correo Electrónico *</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Contraseña *</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="••••••••"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Confirmar Contraseña *</Form.Label>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="••••••••"
                          required
                        />
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
                      rows={2}
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Calle, número, comuna, ciudad"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100 mb-3">
                    Crear Cuenta
                  </Button>

                  <div className="text-center">
                    <p className="mb-0">
                      ¿Ya tienes cuenta?{" "}
                      <Link to="/login" className="text-primary-custom">
                        Inicia sesión aquí
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

export default Register
