// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract QuestToken is ERC20 {
    
    constructor (uint256 initialSupply) ERC20("Quest", "QST") {
        _mint(msg.sender, initialSupply * 10**18);
    } 


    function tokenURI() public pure returns (string memory) {
        return "https://hwj36jh5hbevagjdj523t5rkh2aybonvbldammcrpqkz3hinnw6q.arweave.net/PZO_JP04SVAZI091ufYqPoGAubUKxgYwUXwVnZ0Nbb0";
    }

}