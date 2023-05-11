const hre = require("hardhat");
import { ethers } from "ethers";
import LensHubArtifact from "../src/contracts/LensHub.json";
import LensHubAddress from "../src/contracts/contract-address.json";

async function main() {
  // const [governance] = await initEnv(hre);
  // const addrs = getAddrs();
  const lensHub = LensHub__factory.connect(addrs['lensHub proxy'], governance);
  console.log(await lensHub.getState());
  await waitForTx(lensHub.setState(ProtocolState.Unpaused));
  console.log(await lensHub.getState());
  };
// });

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});