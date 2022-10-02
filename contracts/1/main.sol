// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract Main is Ownable{
    uint256 public num;
    address roler;

    modifier role{
        require(msg.sender == roler);
        _;
    }
    
    function add()public role{
        num +=1;
    }

    function setRole(address _roler) public onlyOwner{
        roler = _roler;
    }

}
