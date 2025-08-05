import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css"; // Adjust the path if needed

// ✅ Import Bootstrap and Animate.css from node_modules
import "animate.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
