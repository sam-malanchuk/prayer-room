// require server
const server = require('./server.js');

// initiate port from env or default
const PORT = process.env.PORT || 4000;

// start server listening
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});