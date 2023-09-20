import React, { useState } from "react";
import FormAndAPI from "./20.09/FormAndAPI";
import UserInfo from "./20.09/UserInfo";
import UserList from "./20.09/UserList";

export default function App() {

  const [usersArray, setUsersArray] = useState([])
  const [userNotFound, setUserNotFound] = useState(false)
  const updateUser = user => {
    if (user.login) {
      setUsersArray([...usersArray, user])
      setUserNotFound(false)
    }
    else {
      setUsersArray([...usersArray])
      setUserNotFound(true)
    }
  }

  return (
    <>
      <FormAndAPI onSubmit={updateUser} />
      {userNotFound ? <h2>User not found</h2> : <UserList users={usersArray} />}
    </>
  );
}
