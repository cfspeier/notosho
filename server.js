//Install express server
const express = require('express');
const path = require('path');

const app = express();

var mysql      = require('mysql');

var parseDbUrl = require("parse-database-url");
var bodyParser     =  require("body-parser");
var conn_details = parseDbUrl(process.env.CLEARDB_DATABASE_URL);
//Here we are configuring express to use body-parser as middle-ware.
var connection ;

var schedule = require('node-schedule');

var j = schedule.scheduleJob('1,11,21,31,41,51 * * * *', function(){
  connection = mysql.createConnection(conn_details)

  connection.query("DELETE FROM cart_entries WHERE timestamp < (NOW() - INTERVAL 3 HOUR);", function(err, rows, fields) {

    if (err) throw err;
    console.log('DELETED OLD ROWS');

    connection.end();
});


//connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//  if (err) throw err;
//  console.log('The solution is: ', rows[0].solution);
//});


var newCartCodeNumber = 0

function queryPromise(str) {
  return new Promise((resolve, reject) => {
    connection.query(str, (err, result, fields) => {
      if (err) reject(err);
      resolve(result);
    })
  })
}

function genCartCodeFromNumber(num) {
  part1 = Math.floor(num/(36*36*36));
  part2 = Math.floor((num%(36*36*36))/(36*36));
  part3 = Math.floor((num%(36*36))/(36));
  part4 = num%36;
  if(part1 > 25) part1 = -10 + part1 - 25;
  if(part2 > 25) part2 = -10 + part2 - 25;
  if(part3 > 25) part3 = -10 + part3 - 25;
  if(part4 > 25) part4 = -10 + part4 - 25;

  return String.fromCharCode(65+part1) + String.fromCharCode(65+part2)  + String.fromCharCode(65+part3)  + String.fromCharCode(65+part4);
}

async function tryToGetNewCartCode(res)
{

  connection = mysql.createConnection(conn_details)
  newCartCodeNumber++;
  var consumedCartCode = newCartCodeNumber-1;
  var result = await queryPromise("SELECT * FROM cart_entries WHERE code='" + genCartCodeFromNumber(consumedCartCode) + "';");
  console.log(result)
  connection.end();
  //
  //if (err) throw err;

  if (result.length  > 0) {
    console.log('already exists');
    return tryToGetNewCartCode(res);
  }
  else {
    console.log(genCartCodeFromNumber(consumedCartCode));
    res.status(200).send({"cartcode": genCartCodeFromNumber(consumedCartCode)});
  }



}



var csp = require('helmet-csp');
// Serve only the static files form the dist directory


//app.use(function(req, res, next) {
//    res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
//    return next();
//});
//

var redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;

//app.use(csp({
//  directives: {
//   defaultSrc: ["'self'", "'*'", "'maxcdn.bootstrapcdn.com'","'code.jquery.com'"],
//   scriptSrc: ["'self'", "'*'","'unsafe-inline'", "'unsafe-eval'"],
//   imgSrc: [`'self'`]
 //}
//}));
app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static('public'));

app.use(express.static(__dirname + '/dist/barslide'));

app.post('/pgetuniquecartcode', function(req,res) {
  console.log("post request")
  tryToGetNewCartCode(res);
});

app.post('/paddcartitem', function(req,res) {
  console.log("post request")
  connection = mysql.createConnection(conn_details)
  console.log(req.body);
  console.log("INSERT into cart_entries (code,ean,rank,timestamp) value ('" + req.body.cart_code + "','"+ req.body.ean_code + "','" + req.body.list_rank + "', NOW());")
  connection.query("INSERT into cart_entries (code,ean,rank,timestamp) value ('" + req.body.cart_code + "','"+ req.body.ean_code + "','" + req.body.list_rank + "', NOW());", function(err, rows, fields) {
    if (err) throw err;
    res.status(200);
  });
  connection.end();
});

app.post('/pgetcartitems', function(req,res) {
  connection = mysql.createConnection(conn_details)
  console.log("SELECT * FROM cart_entries WHERE code='" + req.body.cart_code.toString() + "';")
  connection.query("SELECT * FROM cart_entries WHERE code='" + req.body.cart_code.toString() + "';", function(err, rows, fields) {

    if (err) throw err;


    var all_eans = [];
    rows.forEach(element => all_eans.push(element.ean));

    var data = ({
      eans: all_eans
    });

    res.status(200).send(data)

    });

    connection.end();
});

app.get('/*', function(req,res) {

var firstroute = req.originalUrl.split("/")[1].split("?")[0];

if(firstroute=="getcartitems")
{
  connection = mysql.createConnection(conn_details)
  console.log("SELECT * FROM cart_entries WHERE code='" + req.query.cartcode.toString() + "';")
  connection.query("SELECT * FROM cart_entries WHERE code='" + req.query.cartcode.toString() + "';", function(err, rows, fields) {

    if (err) throw err;
    console.log('The solution is: ', rows[0].ean);

    var all_eans = [];
    rows.forEach(element => all_eans.push(element.ean));

    var data = ({
      eans: all_eans
    });

    res.status(200).send(data)

    });

    connection.end();
}
else if(firstroute=="addcartitem")
{
  connection = mysql.createConnection(conn_details)
  console.log("INSERT into cart_entries (code,ean,rank,timestamp) value ('" + req.query.cartcode + "','"+ req.query.ean + "','" + req.query.rank + "', NOW());")
  connection.query("INSERT into cart_entries (code,ean,rank,timestamp) value ('" + req.query.cartcode + "','"+ req.query.ean + "','" + req.query.rank + "', NOW());", function(err, rows, fields) {

    if (err) throw err;

    res.status(200);

    });
    connection.end();
}
else if(firstroute=="getuniquecartcode")
{
  tryToGetNewCartCode(res);
}
else if(firstroute=="eink"){
  res.sendFile(path.join(__dirname +  '/dist/barslide/assets/enter_cartcode.html'));
}
else {
res.sendFile(path.join(__dirname +  '/dist/barslide/index.html'));
}
});

//app.get("/getcart/:num", function (req, res) {
//   var users = [];
//   var num = req.params.num;

  // connection.connect();

   //connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
   //  if (err) throw err;
   //  console.log('The solution is: ', rows[0].solution);
   //});

   //connection.end();


  // res.status(200).send(users);

 //});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
