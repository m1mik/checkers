import { AnyAction } from "redux";
import {
  START_GAME,
  SET_DRAG_PARENT_CELL,
  UPDATE_BOARD,
} from "@store/actions/types";
import Cell from "@models/Cell";
import { WHITE } from "@services/constants";
import Game from "@models/Game";

export interface GameState {
  board: Cell[][];
  currentPlayer: string;
  isGameFinished: boolean;
  dragParentCell: string; // cell id
}

const initialGameState: GameState = {
  board: [],
  currentPlayer: WHITE,
  isGameFinished: false,
  dragParentCell: "",
};

const game = (
  state: GameState = initialGameState,
  action: AnyAction
): GameState => {
  const { type, payload } = action;
  switch (type) {
    case START_GAME:
      return {
        ...state,
        board: Game.populateBlack(Game.populateWhite(Game.createBoard())),
      };
    case SET_DRAG_PARENT_CELL:
      return {
        ...state,
        dragParentCell: payload,
      };
    case UPDATE_BOARD:
      return {
        ...state,
        board: payload,
      };
    default:
      return state;
  }
};

export default game;
