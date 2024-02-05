const express = require('express');
const app = express();
const port = 5000;

const cors = require('cors');
app.use(cors());

app.get('/api/v1/data', async (req, res) => {
  await new Promise(resolve => setTimeout(resolve, 3000));
  res.json({data: 'The current time is ' + new Date().toLocaleTimeString()});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});