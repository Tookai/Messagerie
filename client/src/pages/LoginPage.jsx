import "../styles/loginpage.css";

const LoginPage = () => {
  return (
    <div className="loginpage">
      <form className="loginpage-form">
        <input className="loginpage-input" type="text" name="pseudo" id="pseudo" placeholder="Pseudo" />
        <input className="loginpage-input" type="password" name="password" id="password" placeholder="Password" />
        <button className="loginpage-input btn" type="submit">
          Se Connecter
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
