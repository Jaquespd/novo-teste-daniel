const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  return response.json({ message: 'GoChat' });
});

module.exports = router;