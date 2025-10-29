// Karma configuration
module.exports = (config) => {
  config.set({
    // Base path que será usada para resolver todos los patrones
    basePath: "",

    // Frameworks a usar
    frameworks: ["jasmine"],

    // Lista de archivos / patrones a cargar en el navegador
    files: ["src/**/*.spec.js", "src/**/*.test.js"],

    // Lista de archivos / patrones a excluir
    exclude: ["node_modules/**"],

    // Preprocesar archivos antes de servirlos al navegador
    preprocessors: {
      "src/**/*.spec.js": ["webpack", "sourcemap"],
      "src/**/*.test.js": ["webpack", "sourcemap"],
    },

    // Configuración de Webpack
    webpack: {
      mode: "development",
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
              },
            },
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            type: "asset/resource",
          },
        ],
      },
      resolve: {
        extensions: [".js", ".jsx"],
      },
    },

    // Reporteros de resultados de pruebas
    reporters: ["progress"],

    // Puerto del servidor web
    port: 9876,

    // Habilitar / deshabilitar colores en la salida
    colors: true,

    // Nivel de logging
    logLevel: config.LOG_INFO,

    // Habilitar / deshabilitar observación de archivos y ejecución de pruebas cuando cambien
    autoWatch: true,

    // Navegadores para ejecutar las pruebas
    browsers: ["ChromeHeadlessCI"],

    customLaunchers: {
      ChromeHeadlessCI: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox", "--disable-gpu"],
      },
    },

    // Continuous Integration mode
    // Si es true, Karma captura navegadores, ejecuta las pruebas y sale
    singleRun: false,

    // Concurrency level - cuántos navegadores deben iniciarse simultáneamente
    concurrency: Number.POSITIVE_INFINITY,
  })
}

