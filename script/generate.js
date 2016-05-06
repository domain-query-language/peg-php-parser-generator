
var Generator = require('../generator');
var fs = require('fs');

var grammarFile = process.argv[2];

fs.readFile(grammarFile, 'utf8', function (err, schema) {
  
  if (err) {
    return console.log(err);
  }
  
  var generator = new Generator();

  try {
    var parser = generator.generate(schema);
  } catch(e){
    console.log(e.message);
    process.exit(1);
    return;
  }
  
	console.log(parser);  
});
