const express = require('express');
const  jsonServer = require('json-server');
const cors = require('cors')

const  server = express();
server.use(cors())

server.use('/api', jsonServer.router('db.json'));

const port = process.env.PORT || 3001
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});