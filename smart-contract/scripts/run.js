async function main() {
  const [owner, user1, user2] = await ethers.getSigners();

  const OnHousePayments = await ethers.getContractFactory("OnHousePayments");
  const onHousePayments = await OnHousePayments.deploy();
  await onHousePayments.deployed();

  console.log("Contract deployed to:", onHousePayments.address);

  let tx = await onHousePayments.connect(user1).payBill("Electricity", { value: ethers.utils.parseEther("0.5") });
  await tx.wait();
  console.log("User1 paid 0.5 ETH for Electricity");

  tx = await onHousePayments.connect(user2).payBill("Water", { value: ethers.utils.parseEther("0.3") });
  await tx.wait();
  console.log("User2 paid 0.3 ETH for Water");

  const allTransactions = await onHousePayments.getAllTransactions();
  console.log("All Transactions:", allTransactions);

  const transactionCount = await onHousePayments.getTransactionCount();
  console.log("Total transaction count:", transactionCount.toString());

  const transaction = await onHousePayments.getTransaction(1);
  console.log("Transaction 1 Details:", transaction);

  const user1Transactions = await onHousePayments.getUserTransactions(user1.address);
  console.log("User1 Transactions:", user1Transactions);

  const user2Transactions = await onHousePayments.getUserTransactions(user2.address);
  console.log("User2 Transactions:", user2Transactions);

  const myTransactions = await onHousePayments.connect(user1).getMyTransactions();
  console.log("User1 Own Transactions:", myTransactions);

  const adminTransactions = await onHousePayments.connect(owner).getAllTransactions();
  console.log("Admin access to all transactions:", adminTransactions);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
