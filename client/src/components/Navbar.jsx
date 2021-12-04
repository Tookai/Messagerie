import "../styles/navbar.css";

const Navbar = () => {
  const userConnected = localStorage.getItem("user");
  const user = JSON.parse(userConnected);

  return (
    <div className="navbar">
      <h1>Live Message App</h1>
      <p>Bonjour {user?.userPseudo || "toi"}</p>
      <p>Se Déconnecter</p>
    </div>
  );
};

export default Navbar;
