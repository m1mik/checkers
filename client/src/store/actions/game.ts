import {
  START_GAME,
  SET_DRAG_PARENT_CELL,
  UPDATE_BOARD,
} from "@store/actions/types";
import { Dispatch } from "redux";
import Cell from "@models/Cell";

export const startGame = () => (dispatch: Dispatch) =>
  dispatch({
    type: START_GAME,
  });

export const setDragParentCell = (parentCell: string) => (dispatch: Dispatch) =>
  dispatch({
    type: SET_DRAG_PARENT_CELL,
    payload: parentCell,
  });

export const updateBoard = (updatedBoard: Cell[][]) => (dispatch: Dispatch) =>
  dispatch({
    type: UPDATE_BOARD,
    payload: updatedBoard,
  });
