
var pegjs = require("pegjs");
var phppegjs = require("php-pegjs");

var Generator = function()
{
  this.generate = function(grammarSchema) {

    var parser = pegjs.buildParser(grammarSchema, {
      plugins: [phppegjs]
    });
    
    return parser;
  };
};

module.exports = Generator;
