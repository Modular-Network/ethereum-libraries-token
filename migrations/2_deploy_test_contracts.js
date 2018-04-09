var BasicMathLib = artifacts.require("ethereum-libraries-basic-math/contracts/BasicMathLib.sol");
var TokenLib = artifacts.require("./TokenLib.sol");
var TokenLibTestContract = artifacts.require("./TokenLibTestContract");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(BasicMathLib,{overwrite: false});
  deployer.link(BasicMathLib, TokenLib);
  deployer.deploy(TokenLib, {overwrite: false});

  if(network === "development" || network === "coverage"){
    deployer.link(TokenLib, TokenLibTestContract);
    deployer.deploy(TokenLibTestContract, accounts[0], "Tester Token", "TST", 18, 100, true);
  }
};
