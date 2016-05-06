
var pegjs = require("pegjs");
var phppegjs = require("php-pegjs");

var Generator = function()
{
  this.generate = function(grammarSchema) {
    
    if (!grammarSchema) {
      throw "The grammar is empy, cannot generate a parser";
    }

    var parser = pegjs.buildParser(grammarSchema, {
      plugins: [phppegjs]
    });
    
    return parser;
  };
};

module.exports = Generator;
