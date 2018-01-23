//add flexibility to destination
var requireOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

var getAndPrintHTMLChunks = function(options){
  var https = require('https');
  var fullData = '';

  https.get(options, function(response){
    response.setEncoding('utf8');
    response.on('data', function(data){
      fullData += data;
    });
    response.on('end', function(){
      console.log(fullData);
    });
  });
};

getAndPrintHTMLChunks();