//Install express server
const express = require('express');
const path = require('path');

const app = express();


var csp = require('helmet-csp');
// Serve only the static files form the dist directory


//app.use(function(req, res, next) {
//    res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
//    return next();
//});
//

app.use(csp({
  directives: {
   defaultSrc: ["'self'", "*"],
   scriptSrc: ["'self'", "'unsafe-inline'"],
   imgSrc: [`'self'`]
 }
}));

app.use(express.static(__dirname + '/dist/barslide'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname +  '/dist/barslide/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
