import { useReducer } from "react";
import reducer, { initialState } from "./state/reducer";
import { newMessage } from "./state/actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return "alal";
}

export default App;
