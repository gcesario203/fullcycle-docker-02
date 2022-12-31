const express = require('express');
const config = require('./config/index.js');
const general = require('./business/general/index.js');
const people = require('./business/people/index.js');

const app = express();

app.get('/', async (req, res) => {
  let response = `
    <h1>Full Cycle Rocks!</h1>

    <ul>
      #names
    </ul>
    `


  let result = await people.get();

  result = result.map(x => x = `<li>${x.Name}</li>`)
                .join('</br>')

  res.send(response.replace('#names',result ));
});

app.listen(config.infra.PORT, async () => {
  await general.createTables();
  console.log(`Example app listening at http://*:${config.infra.PORT}`);
});