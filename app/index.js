import express from 'express'
import config from './config/index.js';
import general from './business/general/index.js';
import people from './business/people/index.js';

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle Rocks!</h1>');
  });
  
  app.listen(config.infra.PORT, async () => {
     await general.createTables();
    console.log(`Example app listening at http://*:${config.infra.PORT}`);
  });