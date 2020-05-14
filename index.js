const express = require('express');
const http = require('http');
const router = require('./server/router.js');

const PORT = 3000;
const app = express();

app.use(express.static('public'));
// /house/comments/:id
app.use('/comment-section', express.static('./comment-section/client/dist/bundle.js'));
// /home/:id, /rate/:zipCode
app.use('/mortgage-calculator', express.static('./mortgage-calculator/public/index.js'));
// /home/similar, /home/newest
app.use('/similar-homes', express.static('./similar-homes/client/dist/bundle.js'));
// /homes/:id
app.use('/image-gallery', express.static('./image-gallery/public/bundle.js'));

app.use('/homes', router);

app.get('/home/similar', (req, res) => {
  const path = `http://localhost:3002/home/similar`;
  http.get(path, (serviceRes) => {
    let data = '';
    serviceRes.on('data', (chunk) => {data += chunk});
    serviceRes.on('end', () => {
      res.send(data);
    });
  });
});

app.get('/home/newest', (req, res) => {
  const path = `http://localhost:3002/home/newest`;
  http.get(path, (serviceRes) => {
    let data = '';
    serviceRes.on('data', (chunk) => {data += chunk});
    serviceRes.on('end', () => {
      res.send(data);
    });
  });
});

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});