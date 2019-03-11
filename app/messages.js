const express = require('express');
const fileDb = require('../fileDb');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(fileDb.getLastMessages());
});

router.post('/', (req, res) => {
    const datetime = (new Date()).toISOString();
    const message = {...req.body, datetime};

    fileDb.addMessage(message);
    res.send(message);
});

module.exports = router;

