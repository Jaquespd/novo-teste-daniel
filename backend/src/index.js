const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'GoChat' });
}); 

app.listen(3333); 