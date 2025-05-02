module.exports = (req, res, next) => {
    const fecha = new Date();
    req.hora = fecha.getHours();
    next();
  };