export const categories = [
  {
    id: "frutas",
    name: "Frutas Frescas",
    description:
      "Nuestra selección de frutas frescas ofrece una experiencia directa del campo a tu hogar. Estas frutas se cultivan y cosechan en el punto óptimo de madurez para asegurar su sabor y frescura. Disfruta de una variedad de frutas de temporada que aportan vitaminas y nutrientes esenciales a tu dieta diaria. Perfectas para consumir solas, en ensaladas o como ingrediente principal en postres y smoothies.",
  },
  {
    id: "verduras",
    name: "Verduras Orgánicas",
    description:
      "Descubre nuestra gama de verduras orgánicas, cultivadas sin el uso de pesticidas ni químicos, garantizando un sabor auténtico y natural. Cada verdura es seleccionada por su calidad y valor nutricional, ofreciendo una excelente fuente de vitaminas, minerales y fibra. Ideales para ensaladas, guisos y platos saludables, nuestras verduras orgánicas promueven una alimentación consciente y sostenible.",
  },
  {
    id: "organicos",
    name: "Productos Orgánicos",
    description:
      "Nuestros productos orgánicos están elaborados con ingredientes naturales y procesados de manera responsable para mantener sus beneficios saludables. Desde aceites y miel hasta granos y semillas, ofrecemos una selección que apoya un estilo de vida saludable y respetuoso con el medio ambiente. Estos productos son perfectos para quienes buscan opciones alimenticias que aporten bienestar sin comprometer el sabor ni la calidad.",
  },
  {
    id: "lacteos",
    name: "Productos Lácteos",
    description:
      "Los productos lácteos de HuertoHogar provienen de granjas locales que se dedican a la producción responsable y de calidad. Ofrecemos una gama de leches, yogures y otros derivados que conservan su frescura y sabor auténtico. Ricos en calcio y nutrientes esenciales, nuestros lácteos son perfectos para complementar una dieta equilibrada, proporcionando el mejor sabor y nutrición para toda la familia.",
  },
]

export const products = [
  {
    id: "FR001",
    name: "Manzanas Fuji",
    category: "frutas",
    price: 1200,
    unit: "kilo",
    stock: 150,
    image: "/images/manzanas-fuji.jpg",
    description:
      "Manzanas Fuji crujientes y dulces, cultivadas en el Valle del Maule. Perfectas para meriendas saludables o como ingrediente en postres. Estas manzanas son conocidas por su textura firme y su sabor equilibrado entre dulce y ácido.",
    origin: "Valle del Maule",
    sustainable: true,
  },
  {
    id: "FR002",
    name: "Naranjas Valencia",
    category: "frutas",
    price: 1000,
    unit: "kilo",
    stock: 200,
    image: "/images/naranjas-valencia.jpg",
    description:
      "Jugosas y ricas en vitamina C, estas naranjas Valencia son ideales para zumos frescos y refrescantes. Cultivadas en condiciones climáticas óptimas que aseguran su dulzura y jugosidad.",
    origin: "Región de Valparaíso",
    sustainable: true,
  },
  {
    id: "FR003",
    name: "Plátanos Cavendish",
    category: "frutas",
    price: 800,
    unit: "kilo",
    stock: 250,
    image: "/images/platanos-cavendish.jpg",
    description:
      "Plátanos maduros y dulces, perfectos para el desayuno o como snack energético. Estos plátanos son ricos en potasio y vitaminas, ideales para mantener una dieta equilibrada.",
    origin: "Importado",
    sustainable: false,
  },
  {
    id: "VR001",
    name: "Zanahorias Orgánicas",
    category: "Verduras Orgánicas",
    price: 900,
    unit: "kilo",
    stock: 100,
    image: "/images/zanahorias-organicas.jpg",
    description:
      "Zanahorias crujientes cultivadas sin pesticidas en la Región de O'Higgins. Excelente fuente de vitamina A y fibra, ideales para ensaladas, jugos o como snack saludable.",
    origin: "Región de O'Higgins",
    sustainable: true,
  },
  {
    id: "VR002",
    name: "Espinacas Frescas",
    category: "verduras",
    price: 700,
    unit: "bolsa de 500g",
    stock: 80,
    image: "/images/espinacas-frescas.jpg",
    description:
      "Espinacas frescas y nutritivas, perfectas para ensaladas y batidos verdes. Estas espinacas son cultivadas bajo prácticas orgánicas que garantizan su calidad y valor nutricional.",
    origin: "Región Metropolitana",
    sustainable: true,
  },
  {
    id: "VR003",
    name: "Pimientos Tricolores",
    category: "verduras",
    price: 1500,
    unit: "kilo",
    stock: 120,
    image: "/images/pimientos-tricolores.jpg",
    description:
      "Pimientos rojos, amarillos y verdes, ideales para salteados y platos coloridos. Ricos en antioxidantes y vitaminas, estos pimientos añaden un toque vibrante y saludable a cualquier receta.",
    origin: "Región del Maule",
    sustainable: true,
  },
  {
    id: "PO001",
    name: "Miel Orgánica",
    category: "organicos",
    price: 5000,
    unit: "frasco de 500g",
    stock: 50,
    image: "/images/miel-organica.jpg",
    description:
      "Miel pura y orgánica producida por apicultores locales. Rica en antioxidantes y con un sabor inigualable, perfecta para endulzar de manera natural tus comidas y bebidas.",
    origin: "Región de Los Lagos",
    sustainable: true,
  },
  {
    id: "PO003",
    name: "Quinua Orgánica",
    category: "organicos",
    price: 3500,
    unit: "bolsa de 1kg",
    stock: 75,
    image: "/images/quinua-organica.jpg",
    description:
      "Quinua orgánica de alta calidad, rica en proteínas y aminoácidos esenciales. Perfecta para ensaladas, guisos y como acompañamiento saludable.",
    origin: "Región de La Araucanía",
    sustainable: true,
  },
  {
    id: "PL001",
    name: "Leche Entera",
    category: "lacteos",
    price: 1200,
    unit: "litro",
    stock: 100,
    image: "/images/leche-entera-fresca-botella.jpg",
    description:
      "Leche entera fresca de granjas locales. Rica en calcio y vitaminas, perfecta para toda la familia. Producida con los más altos estándares de calidad.",
    origin: "Región de Los Lagos",
    sustainable: true,
  },
]
