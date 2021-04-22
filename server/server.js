const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//match all unmatched routes and server the index.html file so that the single page app can service all routes
app.get('*', (request, response) => {
  response.sendFile(path.join(publicPath, 'index.html'));
});

// port that express should use, Heroku has environment variable PORT so we check for that above in case its deploying to Heroku
app.listen(port, () => {
  console.log('Server is up');
});
