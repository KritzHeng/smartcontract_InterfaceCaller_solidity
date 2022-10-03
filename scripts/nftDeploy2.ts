import { ethers } from "hardhat";

async function main() {

  // const NFT = await ethers.getContractFactory("NFT");
  // const nft = await NFT.deploy("https://xxxxxxxx/");

  // await nft.deployed();

  // console.log(`add deployed: ${nft.address}`);


  // const Minter = await ethers.getContractFactory("Minter");
  // const minter = await Minter.deploy(nft.address);

  // await minter.deployed();

  // console.log(`other deployed: ${minter.address}`);

  // await nft.setRole(minter.address);
  // await minter._mint();


  // const number = await nft.num();
  // console.log(`num: ${number}`);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
