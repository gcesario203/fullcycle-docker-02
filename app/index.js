import express from 'express'
import config from './config/index.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Ola mundo!');
  });
  
  app.listen(config.infra.PORT, () => {
    console.log(`Example app listening at http://*:${config.infra.PORT}`);
  });