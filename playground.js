const http = require('http');

const path = `http://localhost:3001/homes/70/images`;

http.get(path, (res) => {
  let data = '';
  res.on('data', (chunk) => {data += chunk});
  res.on('end', () => {
    JSON.parse(data);
    console.log(data);
  })
});