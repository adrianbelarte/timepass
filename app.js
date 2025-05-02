const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');

app.set('view engine', 'ejs'); 
app.use(express.static('public'));

app.use(require('./middlewares/horaMiddleware'));

app.use('/', indexRouter);
app.use('/endroute', require('./middlewares/validarHora'), endrouteRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});