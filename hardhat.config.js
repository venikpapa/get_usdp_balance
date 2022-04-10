require("@nomiclabs/hardhat-waffle");
require("dotenv").config()

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
          url: "https://polygon-mainnet.g.alchemy.com/v2/ExgmkRKbF0pAYQ6YLkMjfuDcjr1mUF5h",
          blockNumber: 26969990,
      },
    },    
  },
};
