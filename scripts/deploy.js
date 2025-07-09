async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    const NFT = await ethers.getContractFactory("PhysicalProductNFT");
    const nft = await NFT.deploy();
  
    await nft.deployed();
    console.log("PhysicalProductNFT deployed to:", nft.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });