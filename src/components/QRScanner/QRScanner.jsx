import React from "react";
import {QrReader} from "react-qr-reader";

function QRScanner({ onScan, onError }) {
  return (
    <div style={{ width: "100%", height: 200 }}>
      <QrReader
        delay={300}
        onError={onError}
        onScan={onScan}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default QRScanner;
