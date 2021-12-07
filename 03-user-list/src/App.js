import React, { useState } from "react";
import UserList from "./components/Users/UserList";
import AddUser from "./components/Users/AddUser";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    user.id = Math.random().toString();
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </React.Fragment>
  );
}

export default App;
