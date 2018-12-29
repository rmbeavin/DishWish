const axios = require('axios');
const express = require ('express');

const app = express();

app.use(express.static(__dirname + '/client/build'));

app.get('/api', async (req, res) => {
  let { data } = await axios.get(`http://www.recipepuppy.com/api/?i=chicken`);
  let recipe = data.results;
	res.send(recipe)
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
