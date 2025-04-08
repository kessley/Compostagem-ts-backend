import express from 'express';
import router from './interfaces/http/routes';
import serverConfig from './config/serverConfig';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router); // aqui sim, passando o Router, e não uma função de controller

app.listen(serverConfig.port, () => {
  console.log(`Server running on port ${serverConfig.port}`);
});
