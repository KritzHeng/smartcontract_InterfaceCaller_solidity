// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol"; 

contract NFT is ERC721, Ownable {
    using Counters for Counters.Counter;
    mapping (uint256 => string) private _tokenURIs;
    Counters.Counter private supply;

    address public minter;

    string public uriPrefix = "";

    event SetMinter(address indexed caller, address indexed minter);
    
    modifier onlyMinter() {
        require(msg.sender == minter, "You are not a minter");
        _;
    }

    constructor(string memory _uriPrefix) ERC721("Non-fungible token", "NFT") {
        uriPrefix = _uriPrefix;
    }
    
    function setMinter(address _minter) public onlyOwner {
        minter = _minter;
        emit SetMinter(msg.sender, minter);
    }

    function totalSupply() public view returns (uint256) {
      return supply.current();
    }

    function _mint(address addr) public onlyMinter{
            supply.increment();
            uint256 newItemId = supply.current();
            _safeMint(addr, newItemId);
            // _setTokenURI(newItemId, uriPrefix);
    }
    // overriding function
    function _baseURI() internal view virtual override returns (string memory) {
        return uriPrefix;
    }

    event SetUriPrefix(address indexed caller, string url);
    function setUriPrefix(string memory _newUrl) public onlyOwner {
        uriPrefix = _newUrl;
        emit SetUriPrefix(msg.sender, _newUrl);
    }


}