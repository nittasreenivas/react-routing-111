import { useState } from "react";
import { Navigate } from "react-router-dom";
export default function Signin(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    console.log("signin", username, password);
    if (username === "vasu" && password === "vasu") {
      console.log("Signin success");
      props.handleSignin(username);
    } else {
      console.log("stay in same page");
    }
  };
  if (props.loginUser) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h3> Signin </h3>
      <input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick}> Signin</button>
    </div>
  );
}
