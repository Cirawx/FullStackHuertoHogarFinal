"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "Beneficios de Consumir Productos Orgánicos",
    category: "Alimentación Saludable",
    date: "15 de Marzo, 2024",
    author: "María González",
    excerpt:
      "Descubre por qué los productos orgánicos son una excelente opción para tu salud y el medio ambiente.",
    image: "/images/blog/organic-benefits.jpg",
    content:
      "Los productos orgánicos ofrecen numerosos beneficios tanto para nuestra salud como para el planeta...",
  },
  {
    id: 2,
    title: "Cómo Reducir el Desperdicio de Alimentos en Casa",
    category: "Sostenibilidad",
    date: "10 de Marzo, 2024",
    author: "Carlos Ramírez",
    excerpt:
      "Consejos prácticos para aprovechar al máximo tus alimentos y reducir el desperdicio.",
    image: "/images/blog/food-waste.jpg",
    content:
      "El desperdicio de alimentos es un problema global que podemos combatir desde nuestros hogares...",
  },
  {
    id: 3,
    title: "Recetas Saludables con Verduras de Temporada",
    category: "Recetas",
    date: "5 de Marzo, 2024",
    author: "Ana Martínez",
    excerpt:
      "Deliciosas recetas que aprovechan lo mejor de cada estación del año.",
    image: "/images/blog/seasonal-recipes.jpg",
    content:
      "Las verduras de temporada no solo son más frescas y sabrosas, sino también más económicas...",
  },
  {
    id: 4,
    title: "La Importancia de Apoyar a los Agricultores Locales",
    category: "Sostenibilidad",
    date: "1 de Marzo, 2024",
    author: "Pedro Silva",
    excerpt:
      "Conoce cómo tu compra puede hacer la diferencia en las comunidades agrícolas.",
    image: "/images/blog/local-farmers.jpg",
    content:
      "Comprar productos locales no solo garantiza frescura, sino que también apoya la economía local...",
  },
  {
    id: 5,
    title: "Vitaminas Esenciales en Frutas y Verduras",
    category: "Alimentación Saludable",
    date: "25 de Febrero, 2024",
    author: "Dra. Laura Fernández",
    excerpt:
      "Una guía completa sobre los nutrientes que aportan diferentes frutas y verduras.",
    image: "/images/blog/vitamins.jpg",
    content:
      "Cada fruta y verdura aporta nutrientes únicos que son esenciales para nuestra salud...",
  },
  {
    id: 6,
    title: "Huertos Urbanos: Cultiva tus Propios Alimentos",
    category: "Sostenibilidad",
    date: "20 de Febrero, 2024",
    author: "Jorge Morales",
    excerpt:
      "Aprende a crear tu propio huerto en casa, sin importar el espacio disponible.",
    image: "/images/blog/urban-garden.jpg",
    content:
      "No necesitas un gran jardín para cultivar tus propios alimentos frescos y saludables...",
  },
];

const categories = [
  "Todas",
  "Alimentación Saludable",
  "Sostenibilidad",
  "Recetas",
];

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "Todas" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <h1>Blog HuertoHogar</h1>
          <p>
            Descubre consejos, recetas y noticias sobre alimentación saludable y
            sostenibilidad
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="blog-filters">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <div className="category-filters">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`filter-btn ${
                      selectedCategory === category ? "active" : ""
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <div className="search-box">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts">
        <div className="container">
          <div className="row">
            {filteredPosts.map((post) => (
              <div key={post.id} className="col-md-6 col-lg-4 mb-4">
                <div className="blog-card">
                  <div className="blog-card-image">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                    />
                    <span className="blog-category">{post.category}</span>
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-meta">
                      <span className="blog-date">{post.date}</span>
                      <span className="blog-author">Por {post.author}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`} className="read-more">
                      Leer más →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="no-results">
              <p>No se encontraron artículos que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-box">
            <h2>Suscríbete a Nuestro Newsletter</h2>
            <p>
              Recibe consejos, recetas y ofertas exclusivas directamente en tu
              correo
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                className="form-control"
                placeholder="Tu correo electrónico"
                required
              />
              <button type="submit" className="btn btn-primary">
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
