import React, { useState } from "react";
import QRScannerBox from "./QRScanner";
import { useNavigate } from "react-router-dom";

function MintForm() {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [qrData, setQrData] = useState("");
  const [status, setStatus] = useState("");
  const [mintedUrl, setMintedUrl] = useState("");

  const navigate = useNavigate();

  const handleMint = async (e) => {
  e.preventDefault();
  // Simulate metadata creation
  const metadata = {
    name: productName,
    description: productDesc,
    image: imageUrl,
    video: videoUrl,
    qr: qrData,
  };
  // Simulate a delay for minting
  setTimeout(() => {
    const productHash = "abc123xyz"; // Replace with real hash logic if needed
    navigate(`/product/${productHash}`, { state: { productDetails: metadata } });
  }, 1200);
};


  return (
    <form className="mint-form" onSubmit={handleMint}>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={e => setProductName(e.target.value)}
        required
      />
      <textarea
        placeholder="Product Description"
        value={productDesc}
        onChange={e => setProductDesc(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="Image URL"
        value={imageUrl}
        onChange={e => setImageUrl(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="Video URL (optional)"
        value={videoUrl}
        onChange={e => setVideoUrl(e.target.value)}
      />
      <div className="qr-section">
        <QRScannerBox />
      </div>
      <button className="mint-btn" type="submit">Mint NFT</button>
      <div className="status-message">{status}</div>
      {mintedUrl && (
        <div className="minted-url">
          <a href={mintedUrl} target="_blank" rel="noopener noreferrer">
            View NFT Metadata (Demo)
          </a>
        </div>
      )}
    </form>
  );
}

export default MintForm;
