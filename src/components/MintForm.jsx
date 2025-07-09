import React, { useState, useRef } from "react";
import { mintNFT } from "../utils/mintNFT";
import QRScanner from './QRScanner';

function MintForm({ walletAddress }) {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [qrData, setQrData] = useState("");
  const [status, setStatus] = useState("");
  const [mintedUrl, setMintedUrl] = useState("");
  const [showScanner, setShowScanner] = useState(false);
  const [showScanOptions, setShowScanOptions] = useState(false);
  const [qrImage, setQrImage] = useState(null);
  const fileInputRef = useRef();

  const handleMint = async (e) => {
    e.preventDefault();
    if (!walletAddress) {
      setStatus("Connect wallet first.");
      return;
    }
    setStatus("Minting...");
    setMintedUrl("");
    const metadata = {
      name: productName,
      description: productDesc,
      image: imageUrl,
      video: videoUrl,
      qr: qrData,
    };
    try {
      const url = await mintNFT(walletAddress, metadata);
      setStatus("NFT minted successfully!");
      setMintedUrl(url);
    } catch (err) {
      setStatus("Minting failed: " + err.message);
    }
  };

  // Handle file input for QR photo
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setQrImage(ev.target.result);
        setShowScanOptions(false);
        // Optionally, you can use a QR code reading library here to extract QR data from the image
      };
      reader.readAsDataURL(file);
    }
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
        placeholder="Image URL (IPFS recommended)"
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
      <div className="qr-section" style={{ marginBottom: 16 }}>
        {/* QR Preview Box */}
        <div
          style={{
            width: 220,
            height: 220,
            border: "2px dashed #aaa",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 10px auto",
            background: "#fafafa",
            overflow: "hidden"
          }}
        >
          {qrImage ? (
            <img src={qrImage} alt="QR Preview" style={{ maxWidth: "100%", maxHeight: "100%" }} />
          ) : (
            <span style={{ color: "#bbb" }}>QR Preview</span>
          )}
        </div>

        {/* SCAN QR Button */}
        <button
          type="button"
          onClick={() => setShowScanOptions(!showScanOptions)}
          style={{ display: "block", margin: "0 auto 10px auto" }}
        >
          SCAN QR
        </button>

        {/* Scan Options */}
        {showScanOptions && (
          <div style={{ textAlign: "center", marginBottom: 10 }}>
            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
            >
              Upload QR
            </button>
            <button
              type="button"
              onClick={() => {
                setShowScanner(true);
                setShowScanOptions(false);
              }}
              style={{ marginRight: 8 }}
            >
              Scan QR
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
        )}

        {/* QR Scanner */}
        {showScanner && (
          <QRScanner
            onScan={data => {
              setQrData(data);
              setShowScanner(false);
            }}
          />
        )}

        {/* QR Code Data */}
        <div style={{ marginTop: 10, textAlign: "center" }}>
          <input
            type="text"
            value={qrData}
            onChange={e => setQrData(e.target.value)}
            placeholder="QR Code Data"
            style={{ width: "90%" }}
          />
        </div>
      </div>
      <button className="mint-btn" type="submit">Mint NFT</button>
      <div className="status-message">{status}</div>
      {mintedUrl && (
        <div className="minted-url">
          <a href={mintedUrl} target="_blank" rel="noopener noreferrer">
            View NFT Metadata
          </a>
        </div>
      )}
    </form>
  );
}

export default MintForm;
