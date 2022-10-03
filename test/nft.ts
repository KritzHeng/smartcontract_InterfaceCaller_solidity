import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { BigNumber } from 'ethers';

describe("Lock", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {

    const [owner, otherAccount] = await ethers.getSigners();

    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy("https://xxxxxxxxx/");
    

    const Minter = await ethers.getContractFactory("Minter");
    const minter = await Minter.deploy(nft.address);
    // return { lock, unlockTime, lockedAmount, owner, otherAccount };

    await nft.setMinter(minter.address)
    console.log("otherAccount:", otherAccount.address);
    return { nft, owner, otherAccount, minter };
  }

  describe("Deployment", function () {
    it("Should set the right minter", async function () {
      const { nft, minter } = await loadFixture(deployOneYearLockFixture);

      expect(await nft.minter()).to.equal(minter.address);
    });

    it("Should set the right mint", async function () {
      const { nft, minter,otherAccount } = await loadFixture(deployOneYearLockFixture);
      await minter.mint(otherAccount.address)
      console.log("totalSupply: ",await nft.totalSupply())
      console.log("tokenURI: ",await nft.tokenURI(1))
      // expect().to.equal(owner.address);
    });

    // it("Should receive and store the funds to lock", async function () {
    //   const { lock, lockedAmount } = await loadFixture(
    //     deployOneYearLockFixture
    //   );

    //   expect(await ethers.provider.getBalance(lock.address)).to.equal(
    //     lockedAmount
    //   );
    // });

  //   it("Should fail if the unlockTime is not in the future", async function () {
  //     // We don't use the fixture here because we want a different deployment
  //     const latestTime = await time.latest();
  //     const Lock = await ethers.getContractFactory("Lock");
  //     await expect(Lock.deploy(latestTime, { value: 1 })).to.be.revertedWith(
  //       "Unlock time should be in the future"
  //     );
  //   });
  // });




  });
});
