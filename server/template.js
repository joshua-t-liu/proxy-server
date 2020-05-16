module.exports = (bundles) => (
  `<!DOCTYPE html>
  <html>
    <head>
    </head>
    <body>
      <div id='image-gallery'></div>
      <div id='similar-homes'></div>
      <div id='comment-section'></div>
      <div id='mortgage-calculator'></div>
      <script>${bundles.join('')}</script>
    </body>
  </html>`
);