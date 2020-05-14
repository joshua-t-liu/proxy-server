export default (components, styles, data) => (
  `<!DOCTYPE html>
  <html>
    <head>
    <script src='/ssr_bundle.js' defer></script>
    <script>window.__TRULIA_DATA__ = ${JSON.stringify(data)}</script>
    ${styles.join('')}
    </head>
    <body>
      ${components.map(([component, id]) => `<div id=${id}>${component}</div>`).join('')}
    </body>
  </html>`
);