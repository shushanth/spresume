const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const geoIp = require('geoip-lite');
const getClientIp = require('ipware')().get_ip;
app = express();
const clientBuildPath = path.resolve(__dirname, '..', 'dist');
app.use((req, res, next) => {
    const remoteAddress = req.connection.remoteAddress;
    const clientIpInfo = getClientIp(req);
    console.log('hostName', req.headers.host);
    console.log('remoteAddress',remoteAddress)
    console.log('clientIpInfo', clientIpInfo);
    console.log('geoInfo', geoIp.lookup(`${clientIpInfo.clientIp}`));
    next();
})
app.use(serveStatic(clientBuildPath));
const port = process.env.PORT || 3100;
app.listen(port);
console.log('server started '+ port);