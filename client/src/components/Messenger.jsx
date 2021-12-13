import "../styles/messenger.css";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import fr from "timeago.js/lib/lang/fr";
import { useState } from "react";

const Messenger = () => {
  timeago.register("fr", fr);
  const convId = window.location.pathname.replace("/", "");

  const userConnected = localStorage.getItem("user");
  const user = JSON.parse(userConnected);

  const {
    data: messages,
    isLoading: messagesLoad,
    isError: messagesErr,
  } = useQuery(["messages", { convId }], () => axios.get(`http://localhost:5500/api/message/${convId}`).then((res) => res.data));

  const [text, setText] = useState("");

  const queryClient = useQueryClient();

  const handleSend = () => {
    axios
      .post(`http://localhost:5500/api/message`, { conversationId: convId, sender: user.userPseudo, text })
      .then((res) => console.log(res.data));
    queryClient.invalidateQueries(["messages", { convId }]);
    queryClient.invalidateQueries("messages");
    queryClient.invalidateQueries("mess");
    setText("");
  };

  return (
    <div className="messenger">
      <div className="messenger-wrapper">
        <div className="messenger-massages">
          {messages?.map((m) => (
            <div className={`${m.sender === user.userPseudo ? "you" : "them"} messenger-msg`} key={m.createdAt}>
              <p className="small">{m.sender}</p>
              <p>{m.text}</p>
              <p className="small">
                <TimeAgo datetime={m.createdAt} locale="fr" />
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="messenger-form">
        <textarea
          className="messenger-textarea"
          name="message"
          id="message"
          rows="5"
          onChange={(e) => setText(e.target.value)}
          value={text}
        ></textarea>
        <button className="messenger-btn" onClick={handleSend}>
          Envoyer
        </button>
      </div>
    </div>
  );
};

export default Messenger;
