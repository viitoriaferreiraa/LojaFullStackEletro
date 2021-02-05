const express = require('express'),
    server = express(),
    cors = require('cors');

server.use(cors());
server.use(express.json());

require('./routes/msg')(server);
require('./routes/products')(server);

server.listen(5000, () => {
    console.log('Server on!')
})

