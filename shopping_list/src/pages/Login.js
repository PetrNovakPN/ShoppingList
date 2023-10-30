import React, { useState } from "react";

const Login = ({ LoggedInUser }) => {
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username.trim() !== "") {
      setLoggedIn(true);
      LoggedInUser(username);
    } else {
      alert("Please enter a username.");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    LoggedInUser("");
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;
