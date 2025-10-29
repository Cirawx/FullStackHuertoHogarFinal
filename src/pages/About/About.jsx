"use client"

import { useState } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import "./About.css"

function About() {
  const [selectedLocation, setSelectedLocation] = useState(null)

  const locations = [
    { city: "Santiago", lat: -33.4489, lng: -70.6693 },
    { city: "Puerto Montt", lat: -41.4693, lng: -72.9424 },
    { city: "Villarrica", lat: -39.2794, lng: -72.2275 },
    { city: "Nacimiento", lat: -37.5019, lng: -72.6739 },
    { city: "Viña del Mar", lat: -33.0245, lng: -71.5518 },
    { city: "Valparaíso", lat: -33.0472, lng: -71.6127 },
    { city: "Concepción", lat: -36.8201, lng: -73.0444 },
  ]

  const getMapUrl = () => {
    if (selectedLocation) {
      return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d${selectedLocation.lng}!3d${selectedLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1ses!2scl!4v1234567890123!5m2!1ses!2scl`
    }
    return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13630089.837291667!2d-78.84375!3d-35.675147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x505e1131102b91d!2sChile!5e0!3m2!1ses!2scl!4v1234567890123!5m2!1ses!2scl"
  }

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="hero-title">Sobre HuertoHogar</h1>
              <p className="hero-subtitle">
                Conectando familias chilenas con el campo desde hace más de 6 años. Llevamos la frescura y calidad de
                los productos del campo directamente a tu puerta.
              </p>
            </Col>
            <Col lg={6}>
              {/* Mostrar la imagen como background para que se comporte como hero/background */}
              <div
                className="hero-image rounded shadow"
                role="img"
                aria-label="Campo chileno"
                style={{ backgroundImage: `url('/images/about-hero.jpg')` }}
              ></div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Misión y Visión */}
      <section className="mission-vision-section py-5">
        <Container>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="info-card shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="card-icon mb-3">
                    <i className="bi bi-bullseye"></i>
                  </div>
                  <h3 className="card-title">Nuestra Misión</h3>
                  <p className="card-text">
                    Nuestra misión es proporcionar productos frescos y de calidad directamente desde el campo hasta la
                    puerta de nuestros clientes, garantizando la frescura y el sabor en cada entrega. Nos comprometemos
                    a fomentar una conexión más cercana entre los consumidores y los agricultores locales, apoyando
                    prácticas agrícolas sostenibles y promoviendo una alimentación saludable en todos los hogares
                    chilenos.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="info-card shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="card-icon mb-3">
                    <i className="bi bi-eye"></i>
                  </div>
                  <h3 className="card-title">Nuestra Visión</h3>
                  <p className="card-text">
                    Nuestra visión es ser la tienda online líder en la distribución de productos frescos y naturales en
                    Chile, reconocida por nuestra calidad excepcional, servicio al cliente y compromiso con la
                    sostenibilidad. Aspiramos a expandir nuestra presencia a nivel nacional e internacional,
                    estableciendo un nuevo estándar en la distribución de productos agrícolas directos del productor al
                    consumidor.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Valores */}
      <section className="values-section py-5 bg-light-custom">
        <Container>
          <h2 className="section-title text-center mb-5">Nuestros Valores</h2>
          <Row>
            <Col md={4} className="mb-4">
              <div className="value-box text-center">
                <div className="value-icon mb-3">
                  <i className="bi bi-heart-fill"></i>
                </div>
                <h4>Calidad</h4>
                <p className="text-secondary-custom">
                  Seleccionamos cuidadosamente cada producto para garantizar la máxima frescura y sabor
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="value-box text-center">
                <div className="value-icon mb-3">
                  <i className="bi bi-tree-fill" style={{ color: "#2E8B57", fontSize: "3rem" }}></i>
                </div>
                <h4>Sostenibilidad</h4>
                <p className="text-secondary-custom">
                  Apoyamos prácticas agrícolas responsables que cuidan el medio ambiente
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="value-box text-center">
                <div className="value-icon mb-3">
                  <i className="bi bi-people-fill"></i>
                </div>
                <h4>Comunidad</h4>
                <p className="text-secondary-custom">
                  Conectamos a productores locales con familias, fortaleciendo la economía regional
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Estadísticas */}
      <section className="stats-section py-5">
        <Container>
          <Row className="text-center">
            <Col md={3} className="mb-4">
              <div className="stat-box">
                <h2 className="stat-number">6+</h2>
                <p className="stat-label">Años de Experiencia</p>
              </div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="stat-box">
                <h2 className="stat-number">9</h2>
                <p className="stat-label">Puntos de Distribución</p>
              </div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="stat-box">
                <h2 className="stat-number">10,000+</h2>
                <p className="stat-label">Familias Satisfechas</p>
              </div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="stat-box">
                <h2 className="stat-number">100+</h2>
                <p className="stat-label">Productores Locales</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mapa de Ubicaciones */}
      <section className="locations-section py-5 bg-light-custom">
        <Container>
          <h2 className="section-title text-center mb-4">Nuestras Ubicaciones</h2>
          <p className="text-center text-secondary-custom mb-5">
            Operamos en más de 9 puntos a lo largo de Chile, llevando productos frescos a tu ciudad
          </p>

          <Row className="mb-4">
            {locations.map((location, index) => (
              <Col key={index} md={4} lg={3} className="mb-3">
                <Card
                  className={`location-card shadow-sm text-center ${selectedLocation?.city === location.city ? "active" : ""}`}
                  onClick={() => setSelectedLocation(location)}
                  style={{ cursor: "pointer" }}
                >
                  <Card.Body>
                    <i className="bi bi-geo-alt-fill location-icon"></i>
                    <h5 className="location-name">{location.city}</h5>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Card className="map-card shadow">
            <Card.Body className="p-0">
              <div className="map-container">
                <iframe
                  key={selectedLocation?.city || "default"}
                  title="Mapa de ubicaciones HuertoHogar"
                  src={getMapUrl()}
                  width="100%"
                  height="500"
                  style={{ border: 0, borderRadius: "15px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="map-overlay">
                <p className="text-center text-secondary-custom p-3 mb-0">
                  <i className="bi bi-info-circle"></i>
                  {selectedLocation
                    ? ` Ubicación seleccionada: ${selectedLocation.city}`
                    : " Haz clic en una ubicación para ver el mapa detallado"}
                </p>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Impacto Ambiental */}
      <section className="impact-section py-5">
        <Container>
          <h2 className="section-title text-center mb-5">Nuestro Impacto Ambiental</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="impact-card shadow-sm text-center h-100">
                <Card.Body className="p-4">
                  <div className="impact-icon mb-3">
                    <i className="bi bi-tree-fill"></i>
                  </div>
                  <h4>Reducción de Huella de Carbono</h4>
                  <p className="text-secondary-custom">
                    Al comprar productos locales, reduces significativamente las emisiones de transporte
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="impact-card shadow-sm text-center h-100">
                <Card.Body className="p-4">
                  <div className="impact-icon mb-3">
                    <i className="bi bi-recycle"></i>
                  </div>
                  <h4>Empaques Sostenibles</h4>
                  <p className="text-secondary-custom">
                    Utilizamos materiales reciclables y biodegradables en todos nuestros envíos
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="impact-card shadow-sm text-center h-100">
                <Card.Body className="p-4">
                  <div className="impact-icon mb-3">
                    <i className="bi bi-hand-thumbs-up-fill"></i>
                  </div>
                  <h4>Apoyo a Comunidades</h4>
                  <p className="text-secondary-custom">
                    Cada compra apoya directamente a agricultores y productores locales chilenos
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Certificaciones */}
      <section className="certifications-section py-5 bg-light-custom">
        <Container>
          <h2 className="section-title text-center mb-5">Certificaciones y Reconocimientos</h2>
          <Row className="justify-content-center">
            <Col md={3} className="mb-4 text-center">
              <div className="certification-badge">
                <i className="bi bi-award-fill"></i>
                <p className="mt-2 mb-0">Certificación Orgánica</p>
              </div>
            </Col>
            <Col md={3} className="mb-4 text-center">
              <div className="certification-badge">
                <i className="bi bi-shield-check"></i>
                <p className="mt-2 mb-0">Calidad Garantizada</p>
              </div>
            </Col>
            <Col md={3} className="mb-4 text-center">
              <div className="certification-badge">
                <i className="bi bi-star-fill"></i>
                <p className="mt-2 mb-0">Mejor Servicio 2024</p>
              </div>
            </Col>
            <Col md={3} className="mb-4 text-center">
              <div className="certification-badge">
                <i className="bi bi-heart-fill"></i>
                <p className="mt-2 mb-0">Empresa B Certificada</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default About
