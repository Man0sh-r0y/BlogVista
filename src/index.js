import React from "react";
import ReactDOM from "react-dom/client";
import AppContextProvider from "./context/AppContextProvider";
import "./index.css";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <AppContextProvider />
    </BrowserRouter>
);
