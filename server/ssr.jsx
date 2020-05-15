import express from 'express';
import React from 'react';
import { StaticRouter as Router } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import template from './template.js';
import routes from './routes.config.js';

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/favicon.ico', (req, res) => res.sendStatus(204));

app.get('/:id', (req, res) => {
  const { id } = req.params;

  const requests = routes.map(({ Component }) => {
    if (Component.fetchData) {
      return Component.fetchData(id);
    } else {
      return new Promise(resolve => resolve());
    }
  });

  Promise.allSettled(requests)
  .then((results) => results.map((result) => {
    if (result.status === 'fulfilled') {
      if (result.value) {
        if (Array.isArray(result.value)) {
          return result.value.map(r => r.value.data);
        } else {
          return result.value.data;
        }
      }
    }
    return {};
  }))
  .then((data) => {
    const styles = [];
    const body = [];

    routes.map(({ Component, id, router }, idx) => {
      const sheet = new ServerStyleSheet();
      const html = renderToString(sheet.collectStyles(
        (router)
        ? <Router children={<Component homeInit={data[idx]} pathname={req.url} />} />
        : <Component data={data[idx]} />
      ));

      body.push([html, id]);
      styles.push(sheet.getStyleTags());
    });

    res.send(template(body, styles, data))
  })
  .catch(err => console.error(err));

});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log('listening on port', PORT);
});
