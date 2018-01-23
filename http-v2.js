


//fix format
//fix loading time
var getAndPrintHTMLChunks = function(){
  var https = require('https');
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
