// scripts/deploy.js
const { ethers, upgrades } = require("hardhat");
async function main() {
  const WAXEERC20UpgradeSafe = await ethers.getContractFactory("QUOCERC20UpgradeSafe");
  console.log("Deploying Contract...");
  const instance = await upgrades.deployProxy(WAXEERC20UpgradeSafe, ['0xA40B11293e81e263c64f36b44B30350309d1A4B3'], { initializer: 'initialize' });
  await instance.deployed();
  console.log("Proxy deployed to:", instance.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });