// create server instance...
const express = require('express');
const app = express();
const PORT = 3000;

// endpoints... (you can add endpoint)
app.get('/', (req, res) => {
  res.send('Hello World');
})

// listening...
app.listen(PORT, () => {
  console.log(`app listening on port ${port}`);
});
