import { AnyAction } from "redux";
import { START_GAME } from "@store/actions/types";
import Cell from "@models/Cell";
import { WHITE } from "@services/constants";
import Game from "@models/Game";

export interface GameState {
  board: Cell[][];
  currentPlayer: string;
  isGameFinished: boolean;
}

const initialGameState: GameState = {
  board: [],
  currentPlayer: WHITE,
  isGameFinished: false,
};

const game = (
  state: GameState = initialGameState,
  action: AnyAction
): GameState => {
  const { type } = action;
  switch (type) {
    case START_GAME:
      return {
        ...state,
        board: Game.populateBlack(Game.populateWhite(Game.createBoard())),
      };
    default:
      return state;
  }
};

export default game;
