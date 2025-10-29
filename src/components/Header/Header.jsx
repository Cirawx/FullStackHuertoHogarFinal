"use client"
import { Link, useNavigate } from "react-router-dom"
import { Navbar, Nav, Container, Badge, Button } from "react-bootstrap"
import "./Header.css"

function Header({ user, onLogout, cartCount }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    onLogout()
    navigate("/")
  }

  return (
    <header>
      <Navbar bg="white" expand="lg" fixed="top" className="header-navbar shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-logo">
            <i className="bi bi-leaf-fill brand-leaf-icon"></i>
            <span className="brand-text">HuertoHogar</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/" className="nav-link-custom">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/productos" className="nav-link-custom">
                Productos
              </Nav.Link>
              <Nav.Link as={Link} to="/nosotros" className="nav-link-custom">
                Nosotros
              </Nav.Link>
              <Nav.Link as={Link} to="/blog" className="nav-link-custom">
                Blog
              </Nav.Link>

              <Nav.Link as={Link} to="/carrito" className="nav-link-custom position-relative">
                <i className="bi bi-cart3"></i> Carrito
                {cartCount > 0 && (
                  <Badge bg="warning" text="dark" className="cart-badge">
                    {cartCount}
                  </Badge>
                )}
              </Nav.Link>

              {user ? (
                <>
                  <Nav.Link as={Link} to="/perfil" className="nav-link-custom">
                    <i className="bi bi-person-circle"></i> {user.name}
                  </Nav.Link>
                  <Button variant="outline-primary" size="sm" onClick={handleLogout} className="ms-2">
                    Cerrar Sesión
                  </Button>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login" className="nav-link-custom">
                    Iniciar Sesión
                  </Nav.Link>
                  <Button as={Link} to="/registro" variant="primary" size="sm" className="ms-2">
                    Registrarse
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
