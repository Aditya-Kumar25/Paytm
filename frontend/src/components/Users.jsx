import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const Users = () => {
  const [user, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  console.log(user);

  useEffect(() => {
    axios
      .get("http://localhost:3000/app/v1/user/getuser?filter=" + filter)
      .then((response) => {
        console.log(response.data);
        setUsers(response.data.user);
      });
  }, [filter]);

  return (
    <div className="">
      <div>Users</div>
      <div>
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Search..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
      <div>
        {user.map((user) => (
          <User user={user} />
        ))}
      </div>
    </div>
  );
};

function User({ user }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstname[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstname} {user.lastname}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button
          onClick={(e) => {
            navigate("/send?id=" + user._id + "&name=" + user.firstname);
          }}
          label={"Send Money"}
        />
      </div>
    </div>
  );
}
