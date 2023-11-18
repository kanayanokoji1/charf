// Require the contract we've created and assign it to a variable called "Election"
var Election = artifacts.require("./Election.sol");

// Add it to the manifest of deployed contracts to ensure that it gets deployed when we run the migrations
module.exports = function(deployer) {
  deployer.deploy(Election);
}