const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const mensaje = req.query.mensaje;
  const horaActual = req.hora;

  res.send(`
    <html>
      <head>
        <title>Página de Inicio</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 2rem; }
          .error { color: red; margin-top: 1rem; }
          .btn { padding: 0.5rem 1rem; font-size: 16px; }
        </style>
      </head>
      <body>
        <h1>Bienvenido</h1>
        <p>La hora actual es: <strong>${horaActual}:00</strong></p>
        ${mensaje ? `<p class="error">${mensaje}</p>` : ''}
        <form action="/endroute" method="GET">
          <button class="btn" type="submit">Entrar</button>
        </form>
      </body>
    </html>
  `);
});

module.exports = router;