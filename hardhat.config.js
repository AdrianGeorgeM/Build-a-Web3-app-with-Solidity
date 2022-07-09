require("@nomicfoundation/hardhat-toolbox");
// Import and configure dotenv
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "rinkeby",
  networks: {
    rinkeby: {
      //       Deploying contracts with account: ContractCreator: 0x2D2a164362ee0bdaB816fA7FCA35d98bABA44199
      // Account balance:  172513027358883258
      // WavePortal address:Contract  0xd73cC07750141Dc1863c944BDC760513867EDb13

      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      chainId: 1,
      url: process.env.PROD_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
