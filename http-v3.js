//add flexibility on destination
//???There are other ways to structure this using parameters of other types - did you instinctively want to implement it differently?
//???Is there any reason not to just pass the URL as a string?
//???Is there any reason not to pass the host and path as two individual parameters?
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
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

getAndPrintHTMLChunks(requestOptions);
