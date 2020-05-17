module.exports = (bundles) => (
  `<!DOCTYPE html>
  <html>
    <head>
      <script defer crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
      <script defer crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
      <script defer src="https://unpkg.com/react-is@16.13.1/umd/react-is.production.min.js"></script>
      <script defer src="https://unpkg.com/styled-components/dist/styled-components.min.js"></script>
    </head>
    <body>
      <div id='image-gallery'></div>
      <div id='app'></div>
      <div id='commentSection'></div>
      <div id='mortgage-calculator'></div>
      <script defer type='module'>${bundles.join('')}</script>
    </body>
  </html>`
);