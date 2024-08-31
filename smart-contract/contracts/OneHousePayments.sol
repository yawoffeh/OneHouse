// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract OnHousePayments {
    struct Transaction {
        uint256 id;
        address payer;
        uint256 amount;
        string billType;
        uint256 timestamp;
    }

    Transaction[] public transactions;
    uint256 public transactionCount;

    mapping(address => Transaction[]) private userTransactions;

    event PaymentMade(uint256 id, address indexed payer, uint256 amount, string billType, uint256 timestamp);

    function payBill(string memory _billType) public payable {
        require(msg.value > 0, "Payment amount must be greater than 0");

        transactionCount++;
        Transaction memory newTransaction = Transaction({
            id: transactionCount,
            payer: msg.sender,
            amount: msg.value,
            billType: _billType,
            timestamp: block.timestamp
        });

        transactions.push(newTransaction);
        userTransactions[msg.sender].push(newTransaction);

        emit PaymentMade(transactionCount, msg.sender, msg.value, _billType, block.timestamp);
    }

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
}
