describe("NPM", function() {
  var S = require('string');

  it("should let you use the string library dependency", function() {
    var name = S("guy manderson").dasherize().s;
    expect(name).toEqual("guy-manderson");
  });
});
