const router = require('express').Router();
const db = require('../db/conn');

router.route('/').get((req, res) => {
    const connect = db.getDb('socket_word_game');

    connect
        .collection('all_words')
        .findOne({ index: Math.floor(Math.random() * 1766)}, (err, result) => {
            if (err) throw err;
            res.json(result);
        });
})

module.exports = router;