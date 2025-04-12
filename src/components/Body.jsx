import { BiLogoJavascript } from "react-icons/bi";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import "./styles/Body.css";
import Gmbrsd from "../assets/gmbrsd.webp";
import Gmbrsmp from "../assets/gmbrsmp.jpg";
import Gmbrsmk from "../assets/gmbrsmk.jpg";

function Body() {
  return (
    <>
      <div id="skills" className="skills">
        <h1>MY SKILLS</h1>
        <div className="icon">
          <div className="html">
            <TiHtml5 />
          </div>
          <div className="css">
            <FaCss3Alt />
          </div>
          <div className="javascript">
            <BiLogoJavascript />
          </div>
          <div className="reactjs">
            <FaReact />
          </div>
        </div>
      </div>
      <div id="riwayat" className="riwayat">
        <h1>Riwayat Sekolah</h1>
        <div className="sekolah">
          <div className="sd">
            <h1 className="timesd">2015 - 2021</h1>
            <img className="gmbrsd" src={Gmbrsd} alt="" />
            <h1 className="nmsd">SD Muhammadiyah 1 Krian</h1>
          </div>
          <div className="smp">
            <h1 className="timesmp">2021 - 2024</h1>
            <img className="gmbrsmp" src={Gmbrsmp} alt="" />
            <h1 className="nmsmp">SMP YPM 3 Taman</h1>
          </div>
          <div className="smk">
            <h1 className="timesmk">2024 - Now</h1>
            <img className="gmbrsmk" src={Gmbrsmk} alt="" />
            <h1 className="nmsmk">SMK Krian 1</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
