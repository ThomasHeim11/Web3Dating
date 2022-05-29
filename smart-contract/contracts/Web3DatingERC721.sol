//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Web3DatingERC721 is ERC721URIStorage {
    uint256 Web3Dating_Token_ID;

    constructor() ERC721("Web3DatingNFT", "Web3D") {}

    function mintNFT(
        address _userOne,
        address _userTwo,
        string memory tokenURI
    ) public {
        _mint(_userOne, Web3Dating_Token_ID);
        _setTokenURI(Web3Dating_Token_ID, tokenURI);
        Web3Dating_Token_ID++;

        _mint(_userTwo, Web3Dating_Token_ID);
        _setTokenURI(Web3Dating_Token_ID, tokenURI);
        Web3Dating_Token_ID++;
    }
}
