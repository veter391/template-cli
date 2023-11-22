import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('<h1>Home</h1>');
})

const PORT = 5000;
app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}...`));