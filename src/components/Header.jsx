import React from "react";

function Header({ walletAddress, setWalletAddress }) {
  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setWalletAddress(accounts[0]);
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <header className="header">
      <h1>Mint Your Physical Product as NFT</h1>
      {walletAddress ? (
        <span className="wallet-address">
          Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
        </span>
      ) : (
        <button className="connect-btn" onClick={connectWallet}>Connect Wallet</button>
      )}
    </header>
  );
}

export default Header;
