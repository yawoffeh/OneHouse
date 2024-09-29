// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract OnHouseMarketplace {
    struct Transaction {
        uint256 id;
        address payer;
        uint256 amount;
        string billType;
        uint256 timestamp;
    }

    struct Item {
        uint256 id;
        string name;
        uint256 price;
        uint256 stock;
        string image;
    }

    Transaction[] public transactions;
    Item[] public items;
    uint256 public transactionCount;
    uint256 public itemCount;

    mapping(address => Transaction[]) private userTransactions;
    mapping(uint256 => Item) public itemIdToItem;

    event PaymentMade(uint256 id, address indexed payer, uint256 amount, string billType, uint256 timestamp);
    event ItemAdded(uint256 id, string name, uint256 price, uint256 stock);
    event ItemBought(uint256 itemId, address indexed buyer, uint256 quantity);

    // Adding a marketplace item
    function addItem(string memory _name, uint256 _price, uint256 _stock, string memory _image) public {
        require(_price > 0, "Item price must be greater than 0");
        require(_stock > 0, "Stock must be greater than 0");

        itemCount++;
        Item memory newItem = Item({
            id: itemCount,
            name: _name,
            price: _price,
            stock: _stock,
            image: _image
        });

        items.push(newItem);
        itemIdToItem[itemCount] = newItem;

        emit ItemAdded(itemCount, _name, _price, _stock);
    }

    // Buying an item, and deducting the stock accordingly
    function buyItems(uint256[] memory _itemIds, uint256[] memory _quantities) public payable {
        require(_itemIds.length == _quantities.length, "Item IDs and quantities must match");
        uint256 totalCost = 0;

        // Calculate the total cost for all items being bought
        for (uint256 i = 0; i < _itemIds.length; i++) {
            Item memory item = itemIdToItem[_itemIds[i]];
            require(item.stock >= _quantities[i], "Not enough stock for the item");
            
            totalCost += item.price * _quantities[i];
        }

        // Check if the sent value matches the total cost
        require(msg.value == totalCost, "Incorrect payment amount");

        // Process the purchase
        for (uint256 i = 0; i < _itemIds.length; i++) {
            Item storage item = itemIdToItem[_itemIds[i]];
            item.stock -= _quantities[i]; // Deduct stock for each item
            emit ItemBought(_itemIds[i], msg.sender, _quantities[i]);
        }

        // Record the transaction
        transactionCount++;
        Transaction memory newTransaction = Transaction({
            id: transactionCount,
            payer: msg.sender,
            amount: msg.value,
            billType: "Marketplace Purchase",
            timestamp: block.timestamp
        });

        transactions.push(newTransaction);
        userTransactions[msg.sender].push(newTransaction);

        emit PaymentMade(transactionCount, msg.sender, msg.value, "Marketplace Purchase", block.timestamp);
    }

    // View functions
    function getTransaction(uint256 _id) public view returns (Transaction memory) {
        require(_id > 0 && _id <= transactionCount, "Transaction does not exist");
        return transactions[_id - 1];
    }

    function getAllTransactions() public view returns (Transaction[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }

    function getUserTransactions(address _user) public view returns (Transaction[] memory) {
        return userTransactions[_user];
    }

    function getMyTransactions() public view returns (Transaction[] memory) {
        return userTransactions[msg.sender];
    }

    // Function to view an item by ID
    function getItem(uint256 _itemId) public view returns (Item memory) {
        return itemIdToItem[_itemId];
    }

    // Get all available items
    function getAllItems() public view returns (Item[] memory) {
        return items;
    }
}
