const express = require('express');
const app = express();
const path = require('path');

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Configuración de vistas
app.set('views', path.join(__dirname, 'public/html'));

// Ruta inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
