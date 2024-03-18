const express = require('express');
const app = express();
const PORT = 3000;

// Define a route for the GET request
app.get('/', (req, res) => {
  res.status(200).send('Hello, this is a simple Node.js API! from updated file with ci-cd');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
