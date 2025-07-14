import React, { useState } from "react";
import QRScanner from "./QRScanner";
import QRImageBox from "./QRImageBox";
import "./style.css"; // Optional, for custom styles

function QRScannerBox() {
  const [showOptions, setShowOptions] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [qrData, setQrData] = useState("");

  // Handle QR scan from camera
  const handleScan = (data) => {
    if (data) {
      setQrData(data);
      setShowScanner(false);
      setImageSrc(null);
    }
  };

  const handleError = (err) => {
    setQrData("Scan error: " + err);
  };

  // Handle photo upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
        setShowScanner(false);
        setQrData("Photo uploaded. (QR code reading from image requires backend or extra library)");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      {/* QR Code Image Box */}
      <QRImageBox imageSrc={showScanner ? null : imageSrc} />

      {/* SCAN QR Button */}
      <button
        onClick={() => setShowOptions(!showOptions)}
        style={{
          width: "100%",
          padding: 10,
          borderRadius: 6,
          border: "none",
          background: "#6e8efb",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: 8,
        }}
      >
        SCAN QR
      </button>

      {/* Options: Scan or Upload */}
      {showOptions && (
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 8 }}>
          <button
            onClick={() => {
              setShowScanner(true);
              setShowOptions(false);
              setImageSrc(null);
              setQrData("");
            }}
            style={{
              padding: 8,
              borderRadius: 6,
              border: "1px solid #6e8efb",
              background: "white",
              color: "#6e8efb",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Scan QR
          </button>

          <label
            htmlFor="upload-photo"
            style={{
              padding: 8,
              borderRadius: 6,
              border: "1px solid #6e8efb",
              background: "white",
              color: "#6e8efb",
              fontWeight: "bold",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            Take Photo of QR Code
          </label>
          <input
            type="file"
            id="upload-photo"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      )}

      {/* Camera Scanner */}
      {showScanner && (
        <div style={{ marginBottom: 8 }}>
          <QRScanner onScan={handleScan} onError={handleError} />
        </div>
      )}

      {/* QR Code Data */}
      <div
        style={{
          borderTop: "1px solid #ddd",
          paddingTop: 8,
          color: "#333",
          minHeight: 24,
          fontWeight: "bold",
          wordBreak: "break-word",
        }}
      >
        {qrData ? `QR Code Data: ${qrData}` : "QR Code Data will appear here"}
      </div>
    </div>
  );
}

export default QRScannerBox;
