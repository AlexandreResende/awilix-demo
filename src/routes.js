
const express = require('express');

const router = express.Router();

// const personController = req.scope.resolve('personController');

router.get('/person/getAll', (req, res) => {
  const getAllResult = req.scope.resolve('getAll');

  res.status(200).json({ getAllResult });
});

module.exports = router;
