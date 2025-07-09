import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import MintForm from "./components/MintForm";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./App.css";

function App() {
  const [walletAddress, setWalletAddress] = useState("");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  return (
    <Router>
      <div className="App">
        <Header walletAddress={walletAddress} setWalletAddress={setWalletAddress} />
        <main>
          <Routes>
            <Route path="/signin" element={<SignIn setUser={setUser} />} />
            <Route path="/signup" element={<SignUp setUser={setUser} />} />
            <Route
              path="/"
              element={
                user ? (
                  <MintForm walletAddress={walletAddress} />
                ) : (
                  <Navigate to="/signin" />
                )
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
