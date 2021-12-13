import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const userConnected = localStorage.getItem("user");
  const user = JSON.parse(userConnected);

  let navigate = useNavigate();

  const [reload, setReload] = useState(false);

  reload && navigate("/login");

  const handleClick = () => {
    localStorage.clear();
    setReload(true);
  };

  return (
    <div className="navbar">
      <h1>Live Message App</h1>
      <p>Bonjour {user?.userPseudo || "toi"}</p>
      <p className="disconnect" onClick={handleClick}>
        Se Déconnecter
      </p>
    </div>
  );
};

export default Navbar;
