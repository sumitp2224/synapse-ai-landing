import React from "react";
import ReactDOM from "react-dom/client";

function LandingPage() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to Synapse AI</h1>
      <p>This is a simple React landing page for the CodeCircuit Hackathon, created by Sumit Patil.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);