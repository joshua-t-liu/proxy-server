const express = require('express');
const http = require('http');
const template = require('./server/template.js');
const services = require('./server/routes.js');

const app = express();
const PORT = 3000;

app.get('/:id', (req, res) => {
  const responses = services.map(({ route }) => {
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
  http.get(`${services[0].route}/homes/${id}/images`, (serviceRes) => {
    let data = '';
    serviceRes.on('data', (chunk) => {data += chunk});
    serviceRes.on('end', () => {
      res.json(JSON.parse(data));
    })
    .on('error', (err) => res.send(404));
  });
});

app.get('/mortgageId/:id', (req, res) => {
  const { id } = req.params;
  http.get(`${services[1].route}/mortgageId/${id}`, (serviceRes) => {
    let data = '';
    serviceRes.on('data', (chunk) => {data += chunk});
    serviceRes.on('end', () => {
      res.json(JSON.parse(data));
    })
    .on('error', (err) => res.send(404));
  });
})

app.get('/mortgageRate/:id', (req, res) => {
  const { id } = req.params;
  http.get(`${services[1].route}/mortgageRate/${id}`, (serviceRes) => {
    let data = '';
    serviceRes.on('data', (chunk) => {data += chunk});
    serviceRes.on('end', () => {
      res.json(JSON.parse(data));
    })
    .on('error', (err) => res.send(404));
  });
})

app.get('/home/newest', (req, res) => {
  const { id } = req.params;
  http.get(`${services[2].route}/home/newest`, (serviceRes) => {
    let data = '';
    serviceRes.on('data', (chunk) => {data += chunk});
    serviceRes.on('end', () => {
      res.json(JSON.parse(data));
    })
    .on('error', (err) => res.send(404));
  });
})

app.get('/home/similar', (req, res) => {
  const { id } = req.params;
  http.get(`${services[2].route}/home/similar`, (serviceRes) => {
    let data = '';
    serviceRes.on('data', (chunk) => {data += chunk});
    serviceRes.on('end', () => {
      res.json(JSON.parse(data));
    })
    .on('error', (err) => res.send(404));
  });
})

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log('listening on port', PORT);
});
