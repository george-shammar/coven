import { task } from 'hardhat/config';
import { LensHub__factory } from '../typechain-types';
import { ProtocolState, waitForTx, initEnv, getAddrs } from './helpers/utils';

// task('unpause', 'unpauses the protocol').setAction(async ({}, hre) => {
  async function main() {
  const [governance] = await initEnv(hre);
  const addrs = getAddrs();
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