import { combineReducers } from "redux";
import game from "./game";

const combined = combineReducers({
  game,
});

export default combined;
