var https = require('https');

//every chunks strats in a new line. not a well-writen document
var getAndPrintHTMLChunks = function(){
  var requireOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requireOptions, function(response){
    response.setEncoding('utf8');
    response.on('data', function(data){
      console.log('Chunk Received: ' + data + '\n');
    });
  });
};

getAndPrintHTMLChunks();
