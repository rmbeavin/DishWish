const axios = require('axios');
const express = require ('express');

const app = express();

app.use(express.static(__dirname + '/client/build'));
