const express = require('express');
const http = require('http');
const template = require('./server/template.js');
const routes = require('./server/routes.js');

const app = express();
const PORT = 3000;

app.get('/:id', (req, res) => {
  const responses = routes.map(({route}) => {
    return new Promise((resolve, reject) => {
      let data = ''
      http.get(`${route}/bundle.js`, (res) => {
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => {
          resolve(data);
        }).on('error', (err) => reject(err));
      });
    });
  });

  Promise.all(responses)
  .then(responses => {
    res.send(template(responses));
  })
  .catch((err) => res.send(404));
});

app.get('/homes/:id/images', (req, res) => {
  const { id } = req.params;
  http.get(`http://localhost:3001/homes/${id}/images`, (serviceRes) => {
    let data = '';
    serviceRes.on('data', (chunk) => {data += chunk});
    serviceRes.on('end', () => {
      res.json(JSON.parse(data));
    })
    .on('error', (err) => res.send(404));
  });
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log('listening on port', PORT);
});
