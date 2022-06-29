require('dotenv').config();

const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;

const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let _db;

module.exports = {
    connectToServer: callback => {
        client.connect((err, db) => {
            if (db) {
                _db = db.db('socket_word_game');
                console.log("Connected to Word Game database.");
            }
            return (callback(err));
        });
    },

    getDb: () => {
        return _db;
    }
}