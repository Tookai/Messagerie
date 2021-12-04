import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import fr from "timeago.js/lib/lang/fr";

const Conv = ({ conv }) => {
  timeago.register("fr", fr);

  const userConnected = localStorage.getItem("user");
  const user = JSON.parse(userConnected);
  const friendId = conv.members.filter((m) => m !== user.userId);

  const { data: friend } = useQuery(`friend ${conv._id}`, () =>
    axios.get(`http://localhost:5500/api/user/${friendId[0]}`).then((res) => res.data)
  );

  const queryClient = useQueryClient();
  const handleClick = () => {
    queryClient.invalidateQueries("messages");
  };

  const {
    data: mess,
    isLoading: messLoad,
    isError: messErr,
  } = useQuery(["mess", { conv }], () => axios.get(`http://localhost:5500/api/message/${conv._id}`).then((res) => res.data));

  if (messLoad) {
    return <div>Loading</div>;
  }

  if (messErr) {
    return <div>Error</div>;
  }
  return (
    <Link to={`/${conv._id}`} onClick={handleClick}>
      <div>
        <div className="conv-box selected">
          <div className="conv-date">
            <TimeAgo datetime={mess[mess.length - 1].createdAt} locale="fr" />
          </div>
          <div className="conv-user">{friend?.pseudo}</div>
          <div className="conv-preview">{mess[mess.length - 1].text}</div>
        </div>
      </div>
    </Link>
  );
};

export default Conv;
