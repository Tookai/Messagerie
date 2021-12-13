import "../styles/users.css";
import axios from "axios";
import { useQuery } from "react-query";
import User from "./User";

const Users = () => {
  const { data, isLoading, isError } = useQuery("users", () => axios.get("http://localhost:5500/api/user/all").then((res) => res.data));

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
          <User key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
