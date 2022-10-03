// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "./INFT.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";


interface INFT {
    function _mint(address addr)external;

}


contract Minter is Ownable, ReentrancyGuard {
    INFT public nft;

    constructor(INFT _nft) {
        nft = _nft;
    }                                                                                   

    function setBitToonDAO(INFT _nft) public onlyOwner {
        nft = _nft;
    }

    function mint(address addr) public onlyOwner{
        nft._mint(addr);
    }

}