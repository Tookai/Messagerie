import Navbar from "./components/Navbar";
import Conversations from "./components/Conversations";
import Messenger from "./components/Messenger";
import Users from "./components/Users";
import "./app.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-main">
        <Conversations />
        <Messenger />
        <Users />
      </div>
    </div>
  );
}

export default App;
