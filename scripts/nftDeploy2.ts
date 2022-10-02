import { ethers } from "hardhat";

async function main() {

  const NFT = await ethers.getContractFactory("NFT");
  const nft = await NFT.deploy("https://xxxxxxxx/");

  await nft.deployed();

  console.log(`add deployed: ${nft.address}`);
  const Other = await ethers.getContractFactory("Other");
  const other = await Other.deploy(nft.address);

  await other.deployed();

  console.log(`other deployed: ${other.address}`);

  await nft.setRole(other.address);
  await other.addnaja();


  const number = await nft.num();
  console.log(`num: ${number}`);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
