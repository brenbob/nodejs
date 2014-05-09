
/*
#3
var http = require("http");
var server = http.createServer(function(req, res) {
  res.end("Hello World");
});
server.listen(8000);
*/

/*#4
var fs = require('fs');
fs.writeFileSync('hello-world.txt', "Hello World!");
*/

/*#5
var fs = require('fs');
fs.writeFile('hello-world.txt', 'Hello World', function (err) {
  if (err) {
    throw err;
  } else {
    console.log('It\'s saved!');
  }
});
*/

/*#6
var express = require('express');

var server = express();
server.get('/', function(req, res){
  res.send('Hello world');
});
server.listen(8000);
*/

/*#7
var express = require('express');

var server = express();
server.use(express.static(__dirname + "/public"));
server.listen(8000);
*/

/*#8
process.stdin.resume();

process.stdin.on('data', function(chunk) {
  var str = chunk.toString();
  if (str === 'exit\n') {
    process.exit();
  } else {
    process.stdout.write(str.toUpperCase());
  }
});
*/

//#9 (scraper)

var request = require('request');
var cheerio = require('cheerio');
var url = process.argv[2];

function callback(e, res, body) {
  var $ = cheerio.load(body.toString());
  $('a').each(function() {
    console.log(this.text());
  });
}

request(url, callback);