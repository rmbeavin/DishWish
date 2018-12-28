const axios = require('axios');
const express = require ('express');

const app = express();

app.use(express.static(__dirname + '/client/build'));

// app.get('/about/api', async (req, res) => {
// 	let { data } = await axios.get(`http://www.recipepuppy.com/api/?i=${ingredients}`);
// 	res.send(data.results);
// })

app.get('/api', async (req, res) => {
  let { data } = await axios.get(`http://www.recipepuppy.com/api/?i=chicken`);
  let recipe = data.results;
	res.send(recipe)
  // recipe ? res.send(recipe) : res.send({message: "No recipe found"})
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
