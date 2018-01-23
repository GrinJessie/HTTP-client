var https = require('https');

var requireOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

var printHTML = function(data){
 console.log(data);
}

var getHTML = function(options, callback){
  var html = '';
  https.get(options, function(response){
    response.setEncoding('utf8');

    response.on('data', function(data){
      html += data;
    });


    response.on('end', function(){callback(html)});
  });
};

var getAndPrintHTMLChunks = function(options, callback){

  getHTML(options, callback);

};

getAndPrintHTMLChunks(requireOptions, printHTML);
