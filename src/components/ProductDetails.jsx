import React from "react";
import { useLocation, useParams } from "react-router-dom";

function ProductDetails() {
  const { hash } = useParams();
  const location = useLocation();
  const product = location.state?.productDetails;

  // Download handler
  const handleDownload = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(product, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `product_${hash}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  if (!product) return <div>No product data found.</div>;

  return (
    <div className="product-details">
      <h2>Product Details</h2>
      <ul>
        <li><strong>Name:</strong> {product.name}</li>
        <li><strong>Description:</strong> {product.description}</li>
        <li><strong>Image:</strong> <img src={product.image} alt="Product" width={100} /></li>
        <li><strong>Video:</strong> {product.video && <a href={product.video} target="_blank" rel="noopener noreferrer">View Video</a>}</li>
        <li><strong>QR Data:</strong> {product.qr}</li>
        <li><strong>Unique Hash:</strong> {hash}</li>
      </ul>
      <button onClick={handleDownload}>Download Product Details</button>
    </div>
  );
}

export default ProductDetails;
