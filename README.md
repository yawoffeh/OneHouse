# 🏠 OnHouse - Decentralized Bill Payment Platform

OnHouse is a decentralized finance app allowing everyday people to pay for utilities by connecting their digital wallets.

## 📂 Project Structure

### 1. Frontend
The frontend is built with **React** and styled using **Tailwind CSS**. It connects to the Ethereum blockchain using **Ethers.js** and allows users to interact with the smart contract to make payments, view transaction history, and manage their accounts.

### 2. Smart Contract
The smart contract, written in **Solidity**, is deployed on the Ethereum blockchain. It handles the core logic for bill payments, including recording transactions, associating them with specific users, and emitting events for each payment made.

### 3. Subgraph
The subgraph is used to index and query blockchain data. It listens to events emitted by the smart contract and makes the transaction data easily accessible to the frontend. This ensures that users can quickly retrieve and display their payment history.

## 🚀 Getting Started

### Prerequisites
- **Node.js** and **npm** installed

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/onhouse.git
    cd onhouse
    ```

2. **Install frontend dependencies:**

    ```bash
    npm install
    ```

### Running the Project

1. **Start the frontend:**

    ```bash
    npm start
    ```

2. **View your app:**
    Open your browser and navigate to `http://localhost:3000`.

## 🔧 Technologies Used

- **Ethereum**: Blockchain platform for smart contracts.
- **Solidity**: Language for writing smart contracts.
- **Ethers.js**: Library for interacting with the Ethereum blockchain.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **The Graph**: Protocol for querying blockchain data.

## 👥 Team

- **[Yaw Offeh Dansoh]**
- **[Samuel Kofie]**
- **[Sarah Afua Darko]**
- **[Audrey Asheley Armah]**


---

💡 *OnHouse* - Making bill payments decentralized and seamless.
