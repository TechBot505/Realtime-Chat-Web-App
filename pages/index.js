import { useContext } from "react";
import { Context } from "../context/store";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Auth() {
  const { username, setUsername, secret, setSecret } = useContext(Context);

  const router = useRouter();

  function formSubmitHandler(event) {
    event.preventDefault();
    if (username.length === 0 || secret.length === 0) return;

    axios.put(
      "https://api.chatengine.io/users/",
      { username, secret },
      { headers: { "Private-key": process.env.API_KEY } }
    ).then((r) => router.push("/chats"))
  };

  return (
    <div className="background">
      <div className="authContainer">
        <form className="authForm" onSubmit={(e) => formSubmitHandler(e)}>
          <div className="authTitle">Chat App</div>

          <div className="inputContainer">
            <input
              className="textInput"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="inputContainer">
            <input
              type="password"
              className="textInput"
              placeholder="Password"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className="submitButton">
            Login/Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
