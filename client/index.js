const express = require('express');
const axios = require('axios');

const app = express();

app.get('/api/:ingredientName', async (req, res) => {
  let { data } = await axios.get(`http://recipepuppy.com/api/?i=${req.params.ingredientName}`)
  res.send(data.results)
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Listening on Port ${PORT}`));
