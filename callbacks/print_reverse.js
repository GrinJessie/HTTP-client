var getHTML = require('./http-function');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

var printReverse = function(html){
  html = html.split('').reverse().join('');
  console.log(html);
};

getHTML(requestOptions, printReverse);