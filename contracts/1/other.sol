// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/access/Ownable.sol";

interface IAdd {
    function add()external;
}

contract Other is Ownable{
    IAdd adder;
    
    constructor(IAdd _adder){
        adder = _adder;
    }
    function addnaja()public onlyOwner{
        adder.add();
    }

}
