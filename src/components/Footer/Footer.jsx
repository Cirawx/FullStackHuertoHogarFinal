import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="py-5">
          <Col md={4} className="mb-4">
            <h5 className="footer-title">HuertoHogar</h5>
            <p className="footer-text">
              Conectando familias chilenas con el campo desde hace más de 6 años. 
              Frescura y calidad directo a tu puerta.
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <h5 className="footer-title">Enlaces Rápidos</h5>
            <ul className="footer-links">
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/nosotros">Nosotros</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/carrito">Carrito</Link></li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h5 className="footer-title">Contacto</h5>
            <p className="footer-text">
              <i className="bi bi-envelope"></i> contacto@huertohogar.cl<br />
              <i className="bi bi-telephone"></i> +56 9 1234 5678<br />
              <i className="bi bi-geo-alt"></i> Santiago, Chile
            </p>
            <div className="social-links mt-3">
              <a href="#facebook" className="social-link"><i className="bi bi-facebook"></i></a>
              <a href="#instagram" className="social-link"><i className="bi bi-instagram"></i></a>
              <a href="#twitter" className="social-link"><i className="bi bi-twitter"></i></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3 border-top">
            <p className="mb-0 footer-text">
              &copy; 2025 HuertoHogar. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
