require('dotenv').config();
// require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.6.8",
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`,
      accounts: {mnemonic: process.env.MNEMONIC},
      networkId: 3,
      gasPrice: 10e9
    }
  },
  etherscan: {
    apiKey: `${process.env.etherscanApiKey}`
  },
};


