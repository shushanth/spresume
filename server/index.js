const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const getClientIp = require('ipware')().get_ip;
const expressip = require('express-ip');


const app = express();
const clientBuildPath = path.resolve(__dirname, '..', 'dist');
const port = process.env.PORT || 3100;

//middlewares
app.use(serveStatic(clientBuildPath));


app.listen(port);
console.log(`server listening on port ${port}`);