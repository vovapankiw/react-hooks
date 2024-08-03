import { useState } from "react";
import Joke from "./Joke";
import Stories from "./Stories";
import Task from "./Task";

function App() {
  const [userQuery, setUserQuery] = useState("");

  const serachQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, "_blank");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      serachQuery();
    }
  };

  const updateUser = (event) => {
    setUserQuery(event.target.value);
  };

  return (
    <div className="App">
      <h1>Hello Vova</h1>
      <div className="form">
        <input
          value={userQuery}
          onChange={updateUser}
          onKeyDown={handleKeyPress}
        />
        <button onClick={serachQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Stories />
      <hr />
      <Task />
    </div>
  );
}

export default App;
