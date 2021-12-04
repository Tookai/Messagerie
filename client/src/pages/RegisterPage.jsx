import "../styles/loginpage.css";

const RegisterPage = () => {
  return (
    <div className="loginpage">
      <form className="loginpage-form">
        <input className="loginpage-input" type="text" name="pseudo" id="pseudo" placeholder="Pseudo" />
        <input className="loginpage-input" type="password" name="password" id="password" placeholder="Password" />
        <input className="loginpage-input" type="confirm" name="confirm" id="confirm" placeholder="Confirm Password" />
        <button className="loginpage-input btn" type="submit">
          Créer mon compte
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
