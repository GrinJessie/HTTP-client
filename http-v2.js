//add flexibility on destination
//???There are other ways to structure this using parameters of other types - did you instinctively want to implement it differently?
//???Is there any reason not to just pass the URL as a string?
//???Is there any reason not to pass the host and path as two individual parameters?


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
