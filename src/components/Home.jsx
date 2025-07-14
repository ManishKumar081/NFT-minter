import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: "$549.99",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Smart Phone",
    price: "$299.99",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Furniture",
    price: "$139.99",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="walmart-home">
      {/* Header */}
      <header className="walmart-header">
        <div className="walmart-logo" onClick={() => navigate("/")}>Walmart</div>
        <div className="walmart-search">
          <input type="text" placeholder="Search everything at Walmart online and in store" />
          <button>🔍</button>
        </div>
        <nav className="walmart-nav">
          <a href="#">Tracker</a>
          <a href="#">Grocery & Essentials</a>
          <a href="#">Electronics</a>
          <a href="#">Clothing</a>
          <a href="#">Cart 🛒</a>
        </nav>
      </header>

      {/* Hero Banner */}
      <section className="walmart-hero">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" alt="Walmart Banner" />
        <div className="walmart-hero-text">
          <h1>Save Money. Live Better.</h1>
          <p>Shop the best deals on everyday essentials and more!</p>
        </div>
      </section>

      {/* NFT Minter Section */}
      <section className="nft-minter-section">
        <h2>Mint Your Product as an NFT!</h2>
        <p>Turn your physical products into digital assets. Click below to get started.</p>
        <button className="nft-minter-btn" onClick={() => navigate("/signup")}>Go to NFT Minter</button>
      </section>

      {/* Product Grid */}
      <section className="walmart-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="walmart-footer">
        <p>&copy; {new Date().getFullYear()} Walmart Clone. All rights reserved. | Built for Hackathon</p>
      </footer>
    </div>
  );
} 