const express = require('express');
const output = require("./company-home");

const app = express();

// enable CORS for the entire API
// ...

app.get('/', (req, res) => {
  res.json(output);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
