"use client"

import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import "./BlogDetail.css"

const blogPostsData = {
  1: {
    title: "Beneficios de Consumir Productos Orgánicos",
    category: "Alimentación Saludable",
    date: "15 de Marzo, 2024",
    author: "María González",
    image: "/images/blog/organic-benefits.jpg",
    content: `
      <h2>¿Por qué elegir productos orgánicos?</h2>
      <p>Los productos orgánicos se han convertido en una opción cada vez más popular entre las familias chilenas que buscan una alimentación más saludable y sostenible. Pero, ¿qué hace que estos productos sean tan especiales?</p>
      
      <h3>Beneficios para la salud</h3>
      <p>Los alimentos orgánicos se cultivan sin el uso de pesticidas sintéticos, fertilizantes químicos ni organismos genéticamente modificados. Esto significa que:</p>
      <ul>
        <li>Contienen menos residuos de pesticidas</li>
        <li>Tienen mayor contenido de antioxidantes</li>
        <li>Preservan mejor sus nutrientes naturales</li>
        <li>No contienen aditivos artificiales</li>
      </ul>

      <h3>Impacto ambiental positivo</h3>
      <p>La agricultura orgánica promueve prácticas sostenibles que benefician al medio ambiente:</p>
      <ul>
        <li>Mejora la salud del suelo</li>
        <li>Reduce la contaminación del agua</li>
        <li>Promueve la biodiversidad</li>
        <li>Disminuye la huella de carbono</li>
      </ul>

      <h3>Apoyo a la economía local</h3>
      <p>Al comprar productos orgánicos locales, estás apoyando directamente a los agricultores de tu región, fortaleciendo la economía local y reduciendo la distancia que recorren los alimentos desde el campo hasta tu mesa.</p>

      <h3>Mejor sabor</h3>
      <p>Muchos consumidores reportan que los productos orgánicos tienen un sabor más intenso y auténtico. Esto se debe a que las plantas crecen de manera más natural y desarrollan sus sabores completamente.</p>

      <h2>Cómo incorporar más productos orgánicos en tu dieta</h2>
      <p>No es necesario cambiar toda tu alimentación de un día para otro. Puedes comenzar incorporando gradualmente productos orgánicos:</p>
      <ol>
        <li>Empieza con las frutas y verduras que consumes con más frecuencia</li>
        <li>Prioriza los productos que sueles comer con piel</li>
        <li>Busca opciones locales y de temporada</li>
        <li>Compra en tiendas especializadas como HuertoHogar</li>
      </ol>

      <p>En HuertoHogar, nos comprometemos a traerte los mejores productos orgánicos directamente desde el campo chileno hasta tu hogar, garantizando frescura, calidad y sostenibilidad en cada entrega.</p>
    `,
  },
  2: {
    title: "Cómo Reducir el Desperdicio de Alimentos en Casa",
    category: "Sostenibilidad",
    date: "10 de Marzo, 2024",
    author: "Carlos Ramírez",
    image: "/images/blog/food-waste.jpg",
    content: `
      <h2>El problema del desperdicio de alimentos</h2>
      <p>Cada año, millones de toneladas de alimentos terminan en la basura. En Chile, se estima que cada persona desperdicia aproximadamente 50 kilos de alimentos al año. Este problema no solo afecta nuestra economía familiar, sino también al medio ambiente.</p>

      <h3>Consejos prácticos para reducir el desperdicio</h3>
      
      <h4>1. Planifica tus compras</h4>
      <p>Antes de ir de compras, revisa tu refrigerador y despensa. Haz una lista de lo que realmente necesitas y cíñete a ella. Esto evitará compras impulsivas de productos que podrían terminar desperdiciándose.</p>

      <h4>2. Almacenamiento adecuado</h4>
      <ul>
        <li>Guarda las verduras de hoja en recipientes con papel absorbente</li>
        <li>Mantén las frutas que producen etileno separadas de otras</li>
        <li>Usa recipientes herméticos para prolongar la frescura</li>
        <li>Congela lo que no vayas a usar pronto</li>
      </ul>

      <h4>3. Método FIFO (First In, First Out)</h4>
      <p>Organiza tu refrigerador colocando los productos más antiguos al frente y los nuevos atrás. Así consumirás primero lo que está por vencer.</p>

      <h4>4. Aprovecha todo el alimento</h4>
      <p>Muchas partes de frutas y verduras que normalmente desechamos son comestibles y nutritivas:</p>
      <ul>
        <li>Tallos de brócoli: perfectos para sopas</li>
        <li>Hojas de zanahoria: excelentes en ensaladas</li>
        <li>Cáscaras de cítricos: para infusiones o ralladura</li>
        <li>Huesos y restos de verduras: para caldos caseros</li>
      </ul>

      <h4>5. Compostaje</h4>
      <p>Los restos orgánicos inevitables pueden convertirse en compost, un excelente fertilizante natural para plantas. Es una forma perfecta de cerrar el ciclo y devolver nutrientes a la tierra.</p>

      <h3>Recetas para aprovechar sobras</h3>
      <p>Las sobras pueden transformarse en deliciosas comidas nuevas:</p>
      <ul>
        <li>Verduras sobrantes → Tortillas o revueltos</li>
        <li>Frutas maduras → Smoothies o mermeladas</li>
        <li>Pan duro → Pan rallado o torrijas</li>
        <li>Arroz cocido → Arancini o ensaladas</li>
      </ul>

      <h2>El impacto de reducir el desperdicio</h2>
      <p>Al reducir el desperdicio de alimentos, no solo ahorras dinero, sino que también:</p>
      <ul>
        <li>Reduces tu huella de carbono</li>
        <li>Conservas recursos naturales como agua y energía</li>
        <li>Contribuyes a la seguridad alimentaria global</li>
        <li>Valoras más los alimentos y el trabajo de los agricultores</li>
      </ul>

      <p>En HuertoHogar, te ayudamos a comprar solo lo que necesitas con opciones de cantidades flexibles y productos frescos que duran más tiempo.</p>
    `,
  },
  3: {
    title: "Recetas Saludables con Verduras de Temporada",
    category: "Recetas",
    date: "5 de Marzo, 2024",
    author: "Ana Martínez",
    image: "/images/blog/seasonal-recipes.jpg",
    content: `
      <h2>La importancia de comer de temporada</h2>
      <p>Consumir verduras de temporada no solo es más económico, sino que también garantiza productos más frescos, sabrosos y nutritivos. Además, apoya la agricultura local y reduce el impacto ambiental del transporte de alimentos.</p>

      <h3>Receta 1: Ensalada Primaveral de Espinacas</h3>
      <h4>Ingredientes:</h4>
      <ul>
        <li>200g de espinacas frescas</li>
        <li>1 taza de fresas cortadas</li>
        <li>50g de queso de cabra</li>
        <li>1/4 taza de nueces</li>
        <li>Vinagreta de miel y mostaza</li>
      </ul>
      <h4>Preparación:</h4>
      <ol>
        <li>Lava bien las espinacas y sécalas</li>
        <li>Mezcla con las fresas cortadas</li>
        <li>Agrega el queso de cabra desmenuzado</li>
        <li>Tuesta ligeramente las nueces y añádelas</li>
        <li>Aliña con la vinagreta justo antes de servir</li>
      </ol>

      <h3>Receta 2: Salteado de Verduras de Verano</h3>
      <h4>Ingredientes:</h4>
      <ul>
        <li>2 pimientos tricolores</li>
        <li>2 zanahorias</li>
        <li>1 calabacín</li>
        <li>2 dientes de ajo</li>
        <li>Aceite de oliva, sal y pimienta</li>
      </ul>
      <h4>Preparación:</h4>
      <ol>
        <li>Corta todas las verduras en tiras uniformes</li>
        <li>Calienta aceite de oliva en un wok o sartén grande</li>
        <li>Saltea el ajo picado hasta que esté dorado</li>
        <li>Añade las verduras más duras primero (zanahorias)</li>
        <li>Incorpora el resto y cocina 5-7 minutos</li>
        <li>Sazona al gusto y sirve caliente</li>
      </ol>

      <h3>Receta 3: Sopa de Verduras de Otoño</h3>
      <h4>Ingredientes:</h4>
      <ul>
        <li>2 zanahorias</li>
        <li>1 zapallo pequeño</li>
        <li>1 puerro</li>
        <li>2 papas</li>
        <li>1 litro de caldo de verduras</li>
        <li>Especias: tomillo, laurel</li>
      </ul>
      <h4>Preparación:</h4>
      <ol>
        <li>Pela y corta todas las verduras en cubos</li>
        <li>Sofríe el puerro en aceite de oliva</li>
        <li>Añade el resto de verduras y cocina 5 minutos</li>
        <li>Agrega el caldo y las especias</li>
        <li>Cocina a fuego medio 25-30 minutos</li>
        <li>Puedes licuar para una textura cremosa o dejar con trozos</li>
      </ol>

      <h3>Consejos para cocinar verduras</h3>
      <ul>
        <li><strong>No las sobre cocines:</strong> Las verduras deben quedar crujientes para mantener sus nutrientes</li>
        <li><strong>Usa métodos de cocción saludables:</strong> Al vapor, salteado o al horno</li>
        <li><strong>Aprovecha el agua de cocción:</strong> Contiene nutrientes valiosos para caldos</li>
        <li><strong>Añade grasas saludables:</strong> Un poco de aceite de oliva ayuda a absorber vitaminas</li>
      </ul>

      <h2>Calendario de verduras de temporada en Chile</h2>
      <h4>Primavera (Septiembre - Noviembre):</h4>
      <p>Espárragos, habas, espinacas, lechugas, arvejas</p>

      <h4>Verano (Diciembre - Febrero):</h4>
      <p>Tomates, pimientos, berenjenas, calabacines, pepinos</p>

      <h4>Otoño (Marzo - Mayo):</h4>
      <p>Zapallo, acelgas, brócoli, coliflor, zanahorias</p>

      <h4>Invierno (Junio - Agosto):</h4>
      <p>Repollo, puerros, nabos, alcachofas, espinacas</p>

      <p>En HuertoHogar, siempre encontrarás las mejores verduras de temporada, frescas y listas para tus recetas favoritas.</p>
    `,
  },
}

function BlogDetail() {
  const { id } = useParams()
  const post = blogPostsData[id]
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Patricia López",
      date: "16 de Marzo, 2024",
      text: "Excelente artículo, muy informativo. He empezado a comprar más productos orgánicos gracias a esta información.",
    },
    {
      id: 2,
      author: "Roberto Sánchez",
      date: "17 de Marzo, 2024",
      text: "Me encanta que compartan este tipo de contenido. Es importante conocer los beneficios de lo que consumimos.",
    },
  ])

  if (!post) {
    return (
      <div className="container py-5">
        <h2>Artículo no encontrado</h2>
        <Link to="/blog" className="btn btn-primary mt-3">
          Volver al Blog
        </Link>
      </div>
    )
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        author: "Usuario",
        date: new Date().toLocaleDateString("es-CL", { day: "numeric", month: "long", year: "numeric" }),
        text: comment,
      }
      setComments([...comments, newComment])
      setComment("")
    }
  }

  return (
    <div className="blog-detail-page">
      {/* Breadcrumb */}
      <div className="breadcrumb-section">
        <div className="container">
          <Link to="/">Inicio</Link> / <Link to="/blog">Blog</Link> / <span>{post.title}</span>
        </div>
      </div>

      {/* Article Header */}
      <article className="blog-article">
        <div className="container">
          <div className="article-header">
            <span className="article-category">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="article-meta">
              <span className="article-author">Por {post.author}</span>
              <span className="article-date">{post.date}</span>
            </div>
          </div>

          <div className="article-image">
            <img src={post.image || "/placeholder.svg"} alt={post.title} />
          </div>

          <div className="article-content" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Share Section */}
          <div className="article-share">
            <h4>Compartir este artículo:</h4>
            <div className="share-buttons">
              <button className="share-btn facebook">Facebook</button>
              <button className="share-btn twitter">Twitter</button>
              <button className="share-btn whatsapp">WhatsApp</button>
              <button className="share-btn email">Email</button>
            </div>
          </div>

          {/* Comments Section */}
          <div className="comments-section">
            <h3>Comentarios ({comments.length})</h3>

            <div className="comments-list">
              {comments.map((c) => (
                <div key={c.id} className="comment">
                  <div className="comment-header">
                    <strong>{c.author}</strong>
                    <span className="comment-date">{c.date}</span>
                  </div>
                  <p>{c.text}</p>
                </div>
              ))}
            </div>

            <div className="comment-form">
              <h4>Deja tu comentario</h4>
              <form onSubmit={handleCommentSubmit}>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Escribe tu comentario aquí..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary mt-3">
                  Publicar Comentario
                </button>
              </form>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="related-articles">
        <div className="container">
          <h2>Artículos Relacionados</h2>
          <div className="row">
            <div className="col-md-4">
              <Link to="/blog/2" className="related-card">
                <img src="/images/blog/food-waste.jpg" alt="Artículo relacionado" />
                <h4>Cómo Reducir el Desperdicio de Alimentos</h4>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/blog/3" className="related-card">
                <img src="/images/blog/seasonal-recipes.jpg" alt="Artículo relacionado" />
                <h4>Recetas con Verduras de Temporada</h4>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/blog/4" className="related-card">
                <img src="/images/blog/local-farmers.jpg" alt="Artículo relacionado" />
                <h4>Apoyar a Agricultores Locales</h4>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogDetail
