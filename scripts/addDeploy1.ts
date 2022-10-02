import { ethers } from "hardhat";

async function main() {

  const Main = await ethers.getContractFactory("Main");
  const main = await Main.deploy();

  await main.deployed();

  console.log(`add deployed: ${main.address}`);
  const Other = await ethers.getContractFactory("Other");
  const other = await Other.deploy(main.address);

  await other.deployed();

  console.log(`other deployed: ${other.address}`);

  await main.setRole(other.address);
  await other.addnaja();


  const number = await main.num();
  console.log(`num: ${number}`);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
