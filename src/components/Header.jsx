import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import "./styles/Header.css";
import Profile from "../assets/foto.jpg";

function Header() {
  const textToType = "Hafiz Tri Septian Ramadhani";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting) {
      if (index < textToType.length) {
        setText(textToType.substring(0, index + 1));
        timeout = setTimeout(() => setIndex(index + 1), 150);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (index > 0) {
        setText(textToType.substring(0, index - 1));
        timeout = setTimeout(() => setIndex(index - 1), 100);
      } else {
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <div id="about" className="profil">
      <img src={Profile} alt="foto" />
      <h1 className="nama">
        {text}
        <span className="cursor">|</span>
      </h1>
      <p className="desk">
        "Hai namaku Hafiz Tri Septian Ramadhani. Aku sekarang bersekolah di SMK
        Krian 1. Saya mengambil jurusan Rekayasa Perangkat Lunak. Saya baru
        menguasai beberapa program untuk web development seperti HTML, CSS,
        JavaScript dan React Js."
      </p>
      <div className="github">
        <a href="https://github.com/RIKI1796">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default Header;
