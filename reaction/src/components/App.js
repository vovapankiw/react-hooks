import { useReducer, useEffect } from "react";
import reducer, { initialState } from "../state/reducer";
import PublishMessage from "./PublishMessage";
import MessageBoard from "./MessageBoard";
import Context from "../context";
import PubSub from "../pubsub";
import SetUsername from "./SetUserName";

const pubsub = new PubSub();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    pubsub.addListener({
      message: (messageObject) => {
        const { channel, message } = messageObject;

        console.log("Received message", message, "channel", channel);

        dispatch(message);
      },
    });
  }, []);

  return (
    <Context.Provider value={{ state, dispatch, pubsub }}>
      <h2>Reaction</h2>
      <SetUsername />
      <PublishMessage />
      <MessageBoard />
    </Context.Provider>
  );
}

export default App;
