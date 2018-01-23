var getHTML = require('./http-function');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

var printNumber = function(){

};

getHTML(requestOptions, printNumber);