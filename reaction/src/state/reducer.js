import { NEW_MESSAGE, SET_USERNAME, REACTION_OBJECTS } from "./types";

export const initialState = {
  messages: [],
  username: "anonymous",
  reactionsMap: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return { ...state, messages: [...state.messages, action.item] };
    case SET_USERNAME:
      return { ...state, username: action.username };
    default:
      return state;
  }
};

export default reducer;
