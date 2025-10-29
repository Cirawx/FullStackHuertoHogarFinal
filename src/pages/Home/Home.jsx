import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { categories } from "../../data/products";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="hero-content">
              <h1 className="hero-title">
                Descubre la Frescura del Campo con HuertoHogar
              </h1>
              <p className="hero-subtitle">
                Conéctate con la naturaleza y lleva lo mejor del campo a tu
                mesa. Productos frescos y saludables, directo a tu hogar.
              </p>
              <div className="hero-buttons">
                <Button
                  as={Link}
                  to="/productos"
                  variant="primary"
                  size="lg"
                  className="me-3"
                >
                  Ver Productos
                </Button>
                <Button
                  as={Link}
                  to="/nosotros"
                  variant="outline-primary"
                  size="lg"
                >
                  Conocer Más
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <div
                className="hero-image rounded shadow"
                role="img"
                aria-label="Frutas y verduras frescas del campo"
                style={{ backgroundImage: `url('/images/fresh-vegetables-and-fruits-from-farm.jpg')` }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="categories-section py-5">
        <Container>
          <h2 className="section-title text-center mb-5">
            Nuestras Categorías
          </h2>
          <Row>
            {categories.map((category) => (
              <Col key={category.id} md={6} lg={3} className="mb-4">
                <Card className="category-card h-100 shadow-sm">
                  <Card.Body className="text-center">
                    <div className="category-icon mb-3">
                      <i
                        className={`bi bi-${getCategoryIcon(category.id)}`}
                      ></i>
                    </div>
                    <Card.Title>{category.name}</Card.Title>
                    <Card.Text className="text-secondary-custom">
                      {category.description.substring(0, 100)}...
                    </Card.Text>
                    <Button
                      as={Link}
                      to={`/productos?categoria=${category.id}`}
                      variant="outline-primary"
                      size="sm"
                    >
                      Ver Productos
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 bg-light-custom">
        <Container>
          <h2 className="section-title text-center mb-5">
            ¿Por Qué Elegirnos?
          </h2>
          <Row>
            <Col md={4} className="mb-4">
              <div className="feature-box text-center">
                <div className="feature-icon mb-3">
                  <i className="bi bi-truck"></i>
                </div>
                <h4>Entrega Rápida</h4>
                <p className="text-secondary-custom">
                  Recibe tus productos frescos en la puerta de tu casa en 24-48
                  horas
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="feature-box text-center">
                <div className="feature-icon mb-3">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h4>Calidad Garantizada</h4>
                <p className="text-secondary-custom">
                  Productos seleccionados directamente del campo con los más
                  altos estándares
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="feature-box text-center">
                <div className="feature-icon mb-3">
                  <i className="bi bi-heart"></i>
                </div>
                <h4>Sostenibilidad</h4>
                <p className="text-secondary-custom">
                  Apoyamos prácticas agrícolas sostenibles y a productores
                  locales
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="mb-4">Únete a la Familia HuertoHogar</h2>
              <p className="lead mb-4">
                Más de 10,000 familias chilenas ya disfrutan de productos
                frescos del campo
              </p>
              <Button as={Link} to="/registro" variant="warning" size="lg">
                Crear Cuenta Gratis
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

function getCategoryIcon(categoryId) {
  const icons = {
    frutas: "apple",
    verduras: "basket",
    organicos: "flower1",
    lacteos: "cup-straw",
  };
  return icons[categoryId] || "box";
}

export default Home;
