import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from "react-dom/client"
import { Main } from "./components";

const container = document.getElementById("app");

// Use createRoot instead of ReactDOM.render
const root = createRoot(container);

// Wrap the rendering of Main component inside the createRoot method
root.render(<Main />);
