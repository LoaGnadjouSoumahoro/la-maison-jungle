import "../styles/Banner.css";
import logo from "../assets/logo_la_maison_jungle.png";
function Banner() {
  const title = "La maison de la jungle";
  return (
    <div className="lmj-banner">
      <img src={logo} alt="La maison Jungle" className="lmj-logo" />
      <h1 className="lmj-title">{title}</h1>
    </div>
  );
}

export default Banner;
