const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    [
      "default-src 'self' 'unsafe-inline' 'unsafe-eval' https: data: blob:;",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: blob: https://cdn.jsdelivr.net https://unpkg.com;",
      "style-src 'self' 'unsafe-inline' https: *.googleapis.com fonts.googleapis.com;",
      "img-src 'self' data: https: blob:;",
      "font-src 'self' data: https: fonts.gstatic.com;",
      "connect-src 'self' https: wss: blob:;",
      "media-src 'self' https: blob:;",
      "frame-src 'self' https:;",
      "worker-src 'self' blob:;",
      "child-src 'self' blob:;",
      "object-src 'none';",
      "base-uri 'self';",
      "form-action 'self';"
    ].join(' ')
  );
  next();
}); 