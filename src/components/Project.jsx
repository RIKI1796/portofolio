import "./styles/Project.css";
import Perpus from "../assets/perpus.jpg";
import Timnas from "../assets/timnas.jpg";
import Warung from "../assets/warung.jpg";

function Project() {
  return (
    <div id="project" className="project">
      <h1 className="myproject">My Project</h1>
      <div className="projectlist">
        <div className="timnas">
          <h1 className="first">First Project</h1>
          <img src={Timnas} alt="" />
          <h2 className="jdltmns">Web Timnas(Awal Belajar)</h2>
          <a href="https://timnas-indo.vercel.app/">View</a>
        </div>
        <div className="perpus">
          <h1 className="second">Second Project</h1>
          <img src={Perpus} alt="" />
          <h2 className="jdlprps">Web Perpus</h2>
          <a href="https://perpustakaan-sooty.vercel.app/">View</a>
        </div>
        <div className="warung">
          <h1 className="third">Third Project</h1>
          <img src={Warung} alt="" />
          <h2 className="jdlwrng">Web Warung Makan</h2>
          <a href="https://warung-makan-alpha.vercel.app">View</a>
        </div>
      </div>
    </div>
  );
}

export default Project;
