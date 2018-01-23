var getHTML = require('./http-function');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

var printLowerCase = function(html){
  html = html.toLowerCase();
  console.log(html);
};

getHTML(requestOptions, printLowerCase);