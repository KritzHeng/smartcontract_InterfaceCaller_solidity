// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "./INFT.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
interface INFT {
    function _mint(address addr)external;

}

contract Minter is Ownable {
    INFT public nft;

    constructor(INFT _nft) {
        nft = _nft;
    }                                                                                   

    function setNFT(INFT _nft) public onlyOwner {
        nft = _nft;
    }

    function mint(address addr) public onlyOwner{
        nft._mint(addr);
    }

}