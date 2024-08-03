import { useState } from "react";
import Joke from "./Joke";
import Stories from "./Stories";
import Task from "./Task";
import Gallery from "./Gallery";
import Matrix from "./Matrix";

function App() {
  const [userQuery, setUserQuery] = useState("");
  const [showGallery, setShowGalley] = useState(true);

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

  const toggleGallery = () => {
    setShowGalley(!showGallery);
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
      <hr />
      {showGallery && <Gallery />}
      <button onClick={toggleGallery}>Toggle Galley</button>
      <hr />
      <Matrix />
    </div>
  );
}

export default App;
