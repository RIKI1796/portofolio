import { useEffect, useState } from "react";
import "./styles/Navbar.css";

function Navbar() {
  useEffect(() => {
    const list = document.getElementById("list");
    const close = document.getElementById("close");
    const menu = document.getElementById("menu");

    list.onclick = () => {
      menu.style.transform = "translateX(0)";
    };
    close.onclick = () => {
      menu.style.transform = "translateX(300px)";
    };
  });

  return (
    <nav>
      <div className="judul">
        <h1>MY PORTOFOLIO</h1>
      </div>
      <i id="list" className="bi bi-list"></i>
      <div id="menu" className="menu">
        <span id="close">x</span>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#riwayat">Riwayat-Sekolah</a>
        <a href="#project">Project</a>
      </div>
    </nav>
  );
}

export default Navbar;
