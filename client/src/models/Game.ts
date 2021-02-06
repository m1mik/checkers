import { BLACK, WHITE, A_CHAR_CODE } from "@services/constants";
import Cell from "./Cell";
import Figure from "./Figure";

export default class Game {
  public isFinished: boolean = false;
  public currentPlayer: string = WHITE;
  public static readonly BOARD_SIZE: number = 8;

  public static createBoard = (): Cell[][] => {
    const board = [];
    let currentColor = WHITE;
    let row = [];

    for (let rowCounter = Game.BOARD_SIZE; rowCounter > 0; rowCounter--) {
      for (
        let columnCounter = A_CHAR_CODE;
        columnCounter <= A_CHAR_CODE + 7;
        columnCounter++
      ) {
        row.push(
          new Cell(
            currentColor,
            `${rowCounter}${String.fromCharCode(columnCounter)}`
          )
        );
        if (columnCounter === A_CHAR_CODE + 7) break;
        if (currentColor === WHITE) currentColor = BLACK;
        else currentColor = WHITE;
      }
      board.push(row);
      row = [];
    }
    return board;
  };

  public static populateWhite = (board: Cell[][]): Cell[][] => {
    for (let rowNumber = 5; rowNumber < Game.BOARD_SIZE; rowNumber++) {
      for (let cellIndex = 0; cellIndex < Game.BOARD_SIZE; cellIndex++) {
        const cell = board[rowNumber][cellIndex];
        if (cell.color === BLACK) {
          cell.figure = new Figure(
            `${WHITE}-pawn-${cell.position}`,
            WHITE,
            cell
          );
        }
      }
    }

    return board;
  };

  public static populateBlack = (board: Cell[][]): Cell[][] => {
    for (let rowNumber = 0; rowNumber <= 2; rowNumber++) {
      for (let cellIndex = 0; cellIndex < Game.BOARD_SIZE; cellIndex++) {
        const cell = board[rowNumber][cellIndex];
        if (cell.color === BLACK) {
          cell.figure = new Figure(
            `${BLACK}-pawn-${cell.position}`,
            BLACK,
            cell
          );
        }
      }
    }
    return board;
  };
}
