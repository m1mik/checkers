import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core";
import { WHITE } from "@services/constants";
import Cell from "@models/Cell";
import { AppState } from "@store/types";
import { updateBoard } from "@store/actions/game";
import { useSelector, useDispatch } from "react-redux";
import FigureComp from "../../deps/Figure";
import styles from "./styles";

const useStyles = makeStyles(styles);

const CellComp = ({ cell }: { cell: Cell }) => {
  const classes = useStyles();
  const { dragParentCell, board } = useSelector(
    (state: AppState) => state.game
  );
  const dispatch = useDispatch();

  const drophandler = useCallback(
    (event: React.DragEvent<HTMLImageElement>) => {
      if (cell.figure || cell.color === WHITE) return;
      const [targetCellRow, targetCellCol] = Cell.pointToArrayIndex(
        cell.position
      );
      const [sourceCellRow, sourceCellCol] = Cell.pointToArrayIndex(
        dragParentCell
      );
      const updatedBoard = [...board];
      updatedBoard[targetCellRow][targetCellCol].figure =
        board[sourceCellRow][sourceCellCol].figure;
      updatedBoard[sourceCellRow][sourceCellCol].figure = null;
      dispatch(updateBoard(updatedBoard));
    },
    [cell, board, dragParentCell, dispatch]
  );

  return (
    <div
      id={cell.position}
      key={cell.position}
      className={cell.color === WHITE ? classes.whiteCell : classes.blackCell}
      onDrop={drophandler}
      onDragOver={(e: any) => {
        e.stopPropagation();
        e.preventDefault();
      }}
      onDragEnter={(e: any) => console.log(`on enter ${e.currentTarget.id}`)}
    >
      {cell.figure ? <FigureComp info={cell.figure} /> : null}
    </div>
  );
};

export default CellComp;
