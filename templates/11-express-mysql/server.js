import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import { connection } from './db/connectDB.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());


app.get('/', (req, res) => {
  res.send('<h1>Home</h1>');
})


connection.connect()
  .then(() => {
    console.log('Conectado a la base de datos...');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}...`));
  })
  .catch(err => console.log(err.message));