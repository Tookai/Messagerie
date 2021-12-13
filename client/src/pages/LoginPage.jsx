import { useState } from "react";
import "../styles/loginpage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  console.log(pseudo, password);
  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5500/api/user/login", { pseudo, password }).then((res) => {
      const userId = res.data._id;
      const userPseudo = res.data.pseudo;
      const user = { userId, userPseudo };
      localStorage.setItem("user", JSON.stringify(user));
      console.log("User connected");
      navigate(`/`);
    });
  };

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <div className="loginpage">
      <form className="loginpage-form">
        <input
          className="loginpage-input"
          type="text"
          name="pseudo"
          id="pseudo"
          placeholder="Pseudo"
          onChange={(e) => setPseudo(e.target.value)}
        />
        <input
          className="loginpage-input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginpage-input btn" type="submit" onClick={handleLogin}>
          Se Connecter
        </button>

        <button className="loginpage-input btn2" onClick={handleClick}>
          Vous n'avez pas encore de compte ?
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
