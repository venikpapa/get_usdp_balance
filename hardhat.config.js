require("@nomiclabs/hardhat-waffle");
require("dotenv").config()

const POLYGON_API_KEY=process.env.POLYGON_API_KEY || ""

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
          url: POLYGON_API_KEY,
          blockNumber: 26969990,
      },
    },    
  },
};
