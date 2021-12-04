import "./app.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MessengerPage from "./pages/MessengerPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route path="/register" element={<RegisterPage />} />

          <Route exact path="/" element={<MessengerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
