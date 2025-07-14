import React from "react";

function QRImageBox({ imageSrc }) {
  return (
    <div
      style={{
        width: "100%",
        height: 200,
        border: "2px dashed #aaa",
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f9f9f9",
        marginBottom: 8,
        overflow: "hidden",
      }}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="QR Code"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      ) : (
        <span style={{ color: "#888" }}>QR Code Image will appear here</span>
      )}
    </div>
  );
}

export default QRImageBox;
