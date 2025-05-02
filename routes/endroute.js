const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Ruta Final</title></head>
      <body>
        <h1>¡Has accedido correctamente!</h1>
        <p>!Bienvenido a la ruta final!</p>
      </body>
    </html>
  `);
});

module.exports = router;