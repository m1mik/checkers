import Cell from "./Cell";
export default class Figure {
  public id: string;
  public color: string;
  public isQueen: boolean = false;
  public currentCell: Cell;

  constructor(id: string, color: string, cell: Cell) {
    this.id = id;
    this.color = color;
    this.currentCell = cell;
  }
}
