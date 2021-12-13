import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const userConnected = localStorage.getItem("user");
  const userCon = JSON.parse(userConnected);

  const { data: userConv } = useQuery(["conversation by user", { user }], () =>
    axios.get(`http://localhost:5500/api/conversation/find/${user._id}/${userCon.userId}`).then((res) => res.data)
  );

  let navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleClick = () => {
    if (userConv === null) {
      axios.post("http://localhost:5500/api/conversation", { senderId: userCon.userId, receiverId: user._id }).then((res) => res.data);
      navigate(`/${userConv._id}`);
      queryClient.invalidateQueries("messages");
      queryClient.invalidateQueries("conversations");
    }
    if (userConv) {
      navigate(`/${userConv._id}`);
      queryClient.invalidateQueries("messages");
      queryClient.invalidateQueries("conversations");
    }
  };

  return (
    <div onClick={handleClick}>
      <h4 className="user-pseudo">{user.pseudo}</h4>
    </div>
  );
};

export default User;
