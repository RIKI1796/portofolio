import "./styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="judul">
        <h1>MY PORTOFOLIO</h1>
      </div>
      <div className="menu">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#riwayat">Riwayat-Sekolah</a>
        <a href="#project">Project</a>
      </div>
    </nav>
  );
}

export default Navbar;
