import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

function QRScanner({ onScan }) {
  const [data, setData] = useState('No result');

  return (
    <div>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
            if (onScan) onScan(result?.text);
          }
          // Optionally handle errors here
        }}
        constraints={{ facingMode: 'environment' }} // Use rear camera on mobile
        style={{ width: '100%' }}
      />
      <p>{data}</p>
    </div>
  );
}

export default QRScanner;