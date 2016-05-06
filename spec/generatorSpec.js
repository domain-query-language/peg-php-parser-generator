describe("Generator", function() {
  var Generator = require('../generator');
  
  var generator = new Generator();

  it("should generator a parser based on a grammar", function() {
    var grammar = 'Name = name:[A-Za-z0-9_-]+ { return ["name"=>join("", $name)]; }';
    
    var parser = generator.generate(grammar);
    
    expect(parser).toContain("<?php");
  });
  
  it("should fail when the grammar is invalid", function(){
    
    var failingGrammar = function(){
      var grammar = 'asdf sdg asdgasdfg';
      var parser = generator.generate(grammar);
    };
    
    expect(failingGrammar).toThrow();
  });
});
