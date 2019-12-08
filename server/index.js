const express = require('express');
const path = require('path');
const dns = require('dns');
const serveStatic = require('serve-static');
const getClientIp = require('ipware')().get_ip;
app = express();
const clientBuildPath = path.resolve(__dirname, '..', 'dist');
app.use((req, res, next) => {
    const remoteAddress = req.connection.remoteAddress;
    const clientIpInfo = getClientIp(req);
    dns.reverse(remoteAddress, (err, domains) => {
        console.log(domains);
    })
    console.log('remoteAddress',remoteAddress)
    console.log('clientIpInfo', clientIpInfo);
    next();
})
app.use(serveStatic(clientBuildPath));
const port = process.env.PORT || 3100;
app.listen(port);
console.log('server started '+ port);