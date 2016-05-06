describe("NPM", function() {
  var PJV = require('package-json-validator').PJV;
  
  var package = require('../package.json');
  var packageJson = JSON.stringify(package);
  
  it("should accept package.json as a valid npm file", function() {
    var result = PJV.validate(packageJson, "npm");
    expect(result.valid).toBeTruthy();
  });
  
  it("should fail if the package is not valid", function(){
    var result = PJV.validate("{}", "npm");
    expect(result.valid).not.toBeTruthy();
  });
});
