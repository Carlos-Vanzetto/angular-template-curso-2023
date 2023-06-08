const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());

app.get('/countries', async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',

    }
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);

  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    res.status(0).send(error.message);
  }

});
app.listen(8000, () => { console.log(`listening on port ${PORT}`); });