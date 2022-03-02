// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Collection is ERC1155, Ownable {
    struct Photo {
        uint256 maxSupply;
        uint256 totalSupply;
        uint256 price;
        bool locked;
        string ipfsHash;
    }

    string public name;
    string public symbol;
    uint256 public royalty;

    mapping(uint256 => Photo) public photoData;
    uint256 private _counter;

    error IncorrectPaymentAmount();
    error PhotoDoesntExist();
    error PhotoMaxMinted();
    error TransferFailed();
    error PhotoLocked();

    modifier onlyIfPhotoUnlocked(uint256 photoId) {
        if (photoData[photoId].locked) revert PhotoLocked();
        _;
    }
    modifier onlyIfPhotoExists(uint256 photoId) {
        if (photoId > _counter) revert PhotoDoesntExist();
        _;
    }

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _royalty
    ) ERC1155("") {
        name = _name;
        symbol = _symbol;
        royalty = _royalty;
    }

    // *** OWNER FUNCTIONS *** //
    function addPhoto(Photo memory photo) public onlyOwner {
        unchecked {
            _counter++;
        }
        photoData[_counter] = photo;
    }

    function addPhotos(Photo[] memory photos) public onlyOwner {
        for (uint256 i = 0; i < photos.length; i++) {
            addPhoto(photos[i]);
        }
    }

    function updateRoyalty(uint256 _royalty) public onlyOwner {
        royalty = _royalty;
    }

    function updatePhotoPrice(uint256 photoId, uint256 price)
        public
        onlyOwner
        onlyIfPhotoUnlocked(photoId)
        onlyIfPhotoExists(photoId)
    {
        photoData[photoId].price = price;
    }

    function updatePhotoIPFSHash(uint256 photoId, string memory ipfsHash)
        public
        onlyOwner
        onlyIfPhotoUnlocked(photoId)
        onlyIfPhotoExists(photoId)
    {
        photoData[photoId].ipfsHash = ipfsHash;
    }

    function lockPhoto(uint256 photoId) public onlyOwner {
        photoData[photoId].locked = true;
    }

    function withdraw() public onlyOwner {
        uint256 bal = address(this).balance;
        (bool success, ) = msg.sender.call{value: bal}(new bytes(0));
        if (!success) revert TransferFailed();
    }

    // *** COLLECTOR FUNCTIONS *** //
    function mint(uint256 photoId) public payable {
        if (photoId > _counter) revert PhotoDoesntExist();
        if (photoData[photoId].price != msg.value)
            revert IncorrectPaymentAmount();
        if (photoData[photoId].totalSupply == photoData[photoId].maxSupply)
            revert PhotoMaxMinted();

        photoData[photoId].totalSupply++;
        _mint(msg.sender, photoId, 1, "");
    }

    // *** TOKEN *** //
    function uri(uint256 tokenId) public view override returns (string memory) {
        Photo memory photo = photoData[tokenId];
        return string.concat("ipfs://", photo.ipfsHash);
    }

    function royaltyInfo(uint256, uint256 salePrice)
        public
        view
        returns (address receiver, uint256 royaltyAmount)
    {
        royaltyAmount = (salePrice * royalty) / 10_000;
        return (owner(), royaltyAmount);
    }
}

/*

- collection should have a name and symbol
- contract deployer should be able to mint photos to the collection
- contract deployer should be able to add photos later
- contract deployer should be able to set a mint price for the collection
  - or per photo
- each photo should have a max number of editions
- contract should store funds, withdrawable to owner at any time
- token metadata is all stored as IPFS hashes
- contract deployer should be able to update photo metadata and price



- write tests for this contract
- deployer contract
- frontend to integrate this
- optimizations / diamond standard / etc

*/
