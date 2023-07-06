const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set the public folder as the static directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file for any route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
