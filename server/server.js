const express = require('express');
const helmet = require('helmet');

// import any routers here
const UsersRouter = require('./routers/usersRouter.js');
const PeopleRouter = require('./routers/peopleRouter.js');

// initiate the server
const server = express();

// use helmet 
// server.use(helmet());
// start server
server.use(express.json());

// use any imported routers here
server.use('/users', UsersRouter);
server.use('/people', PeopleRouter);

// basic get request
server.get('/', (req, res) => {
    res.status(200).json("API Endpoint for Prayer Room")
});

// export server
module.exports = server;