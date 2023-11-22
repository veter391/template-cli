import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';

const app = express();

app.use(morgan('dev'));
app.use(express.json());


app.get('/', (req, res) => {
  res.send('<h1>Home</h1>');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}...`));