import "../styles/users.css";
import axios from "axios";
import { useQuery } from "react-query";

const Users = () => {
  const users = axios.get("http://localhost:5500/api/user/all").then((res) => res.data);

  const { data, isLoading, isError } = useQuery("users", () => axios.get("http://localhost:5500/api/user/all").then((res) => res.data));

  console.log(data);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="users">
      <h2>Users</h2>
      <div className="users-wrapper">
        {data.map((user) => (
          <h4 key={user._id} className="user-pseudo">
            {user.pseudo}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default Users;
