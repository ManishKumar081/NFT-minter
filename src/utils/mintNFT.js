import { BrowserProvider, Contract } from "ethers";
import CONTRACT_ABI from "./contractABI.json";
const CONTRACT_ADDRESS = "0xYourContractAddress"; // Replace with your contract address

export async function mintNFT(walletAddress, metadata) {
  // Upload metadata to IPFS here and get the metadataURI
  // For demo, just return a dummy URI
  const metadataURI = await uploadMetadataToIPFS(metadata);

  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner(); // Note: await here!
  const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
  const tx = await contract.mintNFT(walletAddress, metadataURI);
  await tx.wait();
  return metadataURI;
}

// Dummy placeholder for IPFS upload
async function uploadMetadataToIPFS(metadata) {
  // In production, upload to IPFS and return the real URL
  // For demo, return a dummy URL with JSON stringified metadata
  const dummyCid = "bafybeigdyrzt3dummycid";
  return `https://ipfs.io/ipfs/${dummyCid}?data=${encodeURIComponent(JSON.stringify(metadata))}`;
}
