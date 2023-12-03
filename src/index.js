import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = document.getElementById("root");

// Use createRoot to render the App component
const rootInstance = ReactDOM.createRoot(root);
rootInstance.render(<App />);
