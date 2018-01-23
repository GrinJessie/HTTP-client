//modulized the performance on the data
var https = require('https');
var getHTML = require('./http-function.js')

var requireOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

var printHTML = function(data){
 console.log(data);
}

var getAndPrintHTMLChunks = function(options, callback){

  getHTML(options, callback);

};

getAndPrintHTMLChunks(requireOptions, printHTML);
