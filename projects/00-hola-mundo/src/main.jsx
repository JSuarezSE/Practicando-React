//import { StrictMode } from "react";
import reactDOM from "react-dom/client";
import { App } from "./App.jsx";
//import { createRoot } from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";

import React from "react";

const root = reactDOM.createRoot(document.getElementById("root"));
/*
<StrictMode>
    <App />

</StrictMode>,

*/

root.render(<App />);
