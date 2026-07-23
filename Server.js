const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const PORT = 3000;

// FIX: Intercept requests to the home page FIRST before static files serve it raw
app.get('/', (req, res) => {
  const htmlPath = path.join(__dirname, 'public', 'index.html');
  
  try {
    let htmlContent = fs.readFileSync(htmlPath, 'utf8');

    // Create a configuration object from local environment variables
    const runtimeConfig = {
      API_URL: process.env.API_URL || 'http://localhost:5000/default-api',
      APP_ENV: process.env.APP_ENV || 'local-development'
    };

    // Construct the script block
    const injectionScript = `
      <script id="runtime-config">
        window._env_ = ${JSON.stringify(runtimeConfig)};
      </script>
    `;

    // Inject right before the closing head tag
    htmlContent = htmlContent.replace('</head>', `${injectionScript}\n</head>`);
    
    // Prevent browser caching so changes show up immediately on refresh
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.send(htmlContent);
  } catch (err) {
    res.status(500).send('Server Error reading HTML');
  }
});

// MOVE TO BOTTOM: Serve other static assets (CSS, images) only if no route matches
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
