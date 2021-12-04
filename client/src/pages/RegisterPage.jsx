import { useState } from "react";
import "../styles/loginpage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  console.log(pseudo, password, confirm);
  let navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (pseudo !== "" && password !== "" && confirm !== "" && password === confirm) {
      axios.post("http://localhost:5500/api/user/register", { pseudo, password }).then((res) => console.log(res.data));
      console.log(`user created`);
      navigate(`/login`);
    } else {
      alert("Il faut remplir toutes les cases.");
    }
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
        <input
          className="loginpage-input"
          type="password"
          name="confirm"
          id="confirm"
          placeholder="Confirm Password"
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button className="loginpage-input btn" type="submit" onClick={handleRegister}>
          Créer mon compte
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
