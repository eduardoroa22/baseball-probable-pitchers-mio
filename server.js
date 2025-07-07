const express = require('express');
const cors = require('cors');
const getPitchers = require('./index');

const app = express();
const port = process.env.PORT || 3002;

// Permitir CORS para conectar con tu frontend de React
app.use(cors());

app.get('/api/probable-pitchers', async (req, res) => {
  try {
    const data = await getPitchers(); // Ejecutamos el scraper
    res.json(data); // Enviamos los datos como JSON
  } catch (error) {
    console.error('Error al obtener los pitchers:', error.message);
    res.status(500).json({ error: 'Error al obtener pitchers' });
  }
});

app.listen(port, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${port}`);
});
