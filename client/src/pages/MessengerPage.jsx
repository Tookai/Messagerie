import Navbar from "../components/Navbar";
import Conversations from "../components/Conversations";
import Messenger from "../components/Messenger";
import Users from "../components/Users";
import "../styles/messengerpage.css";

const MessengerPage = () => {
  return (
    <div>
      <Navbar />
      <div className="messengerpage-wrapper">
        <Conversations />
        <Messenger />
        <Users />
      </div>
    </div>
  );
};

export default MessengerPage;
