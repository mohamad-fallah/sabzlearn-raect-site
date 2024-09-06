import React from "react";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";

import "./Header.css";

export default function Header() {
  return (
    <header class="header">
        <Topbar />
        <Navbar />
    </header>
  );
}
