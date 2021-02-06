// a8 is [0, 0] ... h1 is [7, 7]
import { A_CHAR_CODE } from "@services/constants";
import Figure from "./Figure";

export default class Cell {
  public color: string;
  public position: string;
  public figure: Figure | null;

  constructor(color: string, position: string) {
    this.color = color;
    this.position = position;
    this.figure = null;
  }
  /**
   * Function accepts point like "e2" | "h8" format and converts it to board position.
   * @param {String} point
   * @returns {Array}  the 1st value in the array is row and the 2nd one is column.
   */
  public static pointToArrayIndex = (point: string) => {
    if (!/^[a-h][1-8]$/.test(point))
      return {
        message: `Invalid format in "pointToArrayIndex":\n${point} doesn't match with regexp.`,
      };
    const row = point.charCodeAt(0) - A_CHAR_CODE;
    const column = parseInt(point[1], 10) - 1;

    return [row, column];
  };

  /**
   * Reverse operation considering previous function
   * @param {Array} point
   * @returns {String} in "a1" | "e4" etc. format.
   */
  public static pointToCellName = (point: Array<number>) => {
    const isDataValid = (value: number) =>
      typeof value === "number" && (value >= 0 || value <= 7);
    if (
      !Array.isArray(point) ||
      !isDataValid(point[0]) ||
      !isDataValid(point[1])
    ) {
      return {
        message: `Invalid format in "pointToCellName":\n ${point} doesn't match with regexp.`,
      };
    }
    const row = String.fromCharCode(A_CHAR_CODE + point[0]);
    const column = point[1] + 1;
    return `${row}${column}`;
  };
}
