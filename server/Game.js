const votes = new Map();
let users = [];

class Connection {
    contructor(io, socket) {
        this.io = io;
        this.socket = socket;

        socket.on('getVotes', () => this.getVotes);
        socket.on('submitVote', () => this.submitVote);
        socket.on('disconnect', () => this.disconnect);
        socket.on('connect_error', (err) => {
            console.log(`connect_error due to ${err.message}`);
        });
    }

    getVotes() {
        return votes;
    }

    submitVote(vote) {
        this.io.sockets.emit('submitVote', vote);
    }
}

function Game(io) {
    io.on("connection", (socket) => {
        console.log('new connection detected');
        new Connection(io, socket);
    });
}

module.exports = Game;