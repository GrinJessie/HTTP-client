var https = require('https');



//
var getAndPrintHTMLChunks = function(){
  var requireOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  var fullData = '';

  https.get(requireOptions, function(response){
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
