const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const getClientIp = require('ipware')().get_ip;
app = express();
const clientBuildPath = path.resolve(__dirname, '..', 'dist');
app.use((req, res, next) => {
    console.log('remoteAddress',req.connection.remoteAddress)
    const clientIpInfo = getClientIp(req);
    console.log('clientIpInfo', clientIpInfo);
    next();
})
app.use(serveStatic(clientBuildPath));
const port = process.env.PORT || 3100;
app.listen(port);
console.log('server started '+ port);