# NFT-minter-
# NFT Minter DApp
A full-stack decentralized app to mint NFTs using Ethereum smart contracts and a React frontend.

## Features
- ERC-721 NFT smart contract
- React frontend with Ethers.js
- MetaMask integration
- On-demand NFT minting

## Run Locally
bash
# Smart contract
cd smart-contract
npm install
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia

# Frontend
cd ../frontend
npm install
npm start


## Deployment
- Hosted on Vercel
- Contract deployed on Sepolia
