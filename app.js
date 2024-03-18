const express = require('express');
const app = express();
const PORT = 80;

// Define a route for the GET request
app.get('/', (req, res) => {
  res.status(200).send('Hello, this is a simple Node.js API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
