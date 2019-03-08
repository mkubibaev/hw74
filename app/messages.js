const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('messages list');
});

router.post('/', (req, res) => {
    res.send({message: 'ok'});
});

module.exports = router;

