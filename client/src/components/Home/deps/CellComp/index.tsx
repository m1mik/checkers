import React from "react";
import { makeStyles } from "@material-ui/core";
import { WHITE } from "@services/constants";
import Cell from "@models/Cell";
import FigureComp from "../../deps/Figure";
import styles from "./styles";

const useStyles = makeStyles(styles);

const CellComp = ({ cell }: { cell: Cell }) => {
  const classes = useStyles();
  return (
    <div
      id={cell.position}
      key={cell.position}
      className={cell.color === WHITE ? classes.whiteCell : classes.blackCell}
      onDrop={(e: any) => console.log(e.target)}
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
