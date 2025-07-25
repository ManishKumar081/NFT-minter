import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import MintForm from "./components/MintForm";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ProductDetails from "./components/ProductDetails";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <main>
          <Routes>
            <Route path="/signin" element={<SignIn setUser={setUser} />} />
            <Route path="/signup" element={<SignUp setUser={setUser} />} />
            <Route path="/product/:hash" element={<ProductDetails />} />
            <Route path="/nft-minter" element={user ? <MintForm /> : <Navigate to="/signin" />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
