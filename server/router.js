const express = require('express');
const http = require('http');
const app = express();
const router = express.Router();

router.get('/:id/images', (req, res) => {
  const { id } = req.params;
  const path = `http://localhost:3001/homes/${id}/images`;
  http.get(path, (serviceRes) => {
    let data = '';
    serviceRes.on('data', (chunk) => {data += chunk});
    serviceRes.on('end', () => {
      res.json(JSON.parse(data));
    })
  });
});

app.get('/house/comments/:id2', (req, res) => {
  const { id } = req.params;
  console.log(req.params, id)
  const path = `http://localhost:3003/house/comments/${id}`;
  http.get(path, (serviceRes) => {
    let data = '';
    serviceRes.on('data', (chunk) => {data += chunk});
    serviceRes.on('end', () => {
      res.send(data);
    });
  });
});

app.get('/comments/:id', (req, res) => {
  const path = `http://localhost:3003/comments/${id}`;
  const options = {
    method: 'put',
  };
  http.request(path, options, (serviceRes) => {
    console.log('put???')
    res.send('completed');
  })
});

router.get('/:id', (req, res) => {
  res.sendFile('index.html', { root: './public/' });
});

router.get('/:id/home/:id', (req, res) => {
  const { id } = req.params;
  const path = `http://localhost:3004/${id}`;
  res.send();
});

module.exports = router;