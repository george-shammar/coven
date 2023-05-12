require("@nomiclabs/hardhat-waffle");
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

API_KEY = process.env.QUICKNODE_API_KEY
PRIVATE_KEY = process.env.BSC_PRIVATE_KEY

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    tBSC: {
      url: `https://tame-summer-energy.bsc-testnet.discover.quiknode.pro/${API_KEY}/`,
      accounts: [PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}
