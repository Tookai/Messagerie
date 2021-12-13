import "../styles/conversations.css";
import axios from "axios";
import { useQuery } from "react-query";
import Conv from "./Conv";

const Conversations = () => {
  const userConnected = localStorage.getItem("user");
  const user = JSON.parse(userConnected);

  const {
    data: conv,
    isLoading,
    isError,
  } = useQuery("conversations", () => axios.get(`http://localhost:5500/api/conversation/${user.userId}`).then((res) => res.data));

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h2>Conversations</h2>
      <div className="conv-wrapper">
        {conv?.map((c) => (
          <Conv conv={c} key={c._id} />
        ))}
      </div>
    </div>
  );
};

export default Conversations;
