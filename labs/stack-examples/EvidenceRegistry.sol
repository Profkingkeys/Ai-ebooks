// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
// Learning example only. A digest is not proof of truth or ownership.
contract EvidenceRegistry {
    mapping(address => bytes32) public digest;
    event Recorded(address indexed author, bytes32 digest);
    function record(bytes32 value) external {
        require(value != bytes32(0), "Empty digest");
        digest[msg.sender] = value;
        emit Recorded(msg.sender, value);
    }
}
