module.exports = (bundles) => (
  `<!DOCTYPE html>
  <html>
    <head>
    </head>
    <body>
      <div id='image-gallery'></div>
      <div id='app'></div>
      <div id='commentSection'></div>
      <div id='mortgage-calculator'></div>
      <script>${bundles.join('')}</script>
    </body>
  </html>`
);