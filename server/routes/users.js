require('dotenv').config();

const router = require('express').Router();
const db = require('../db/conn');
// const { User } = require('../db/models/UserModel');

router.route('/').post((req, res) => {
    const { displayName, id } = req.body;
    const connect = db.getDb('socket_word_game');

    const user = {
        displayName: displayName,
        id: id
    }

    connect
        .collection('users')
        .insertOne(user, (err, result) => {
            if (err) throw err;
            res.sendStatus(200);
            console.log(user);
        });
})

module.exports = router;