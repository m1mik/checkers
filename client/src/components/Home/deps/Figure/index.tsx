import React from "react";
import Figure from "@models/Figure";
import { makeStyles } from "@material-ui/core";
import BlackPawn from "@assets/black-pawn.svg";
import WhitePawn from "@assets/white-pawn.svg";
import WhiteKing from "@assets/white-king.svg";
import BlackKing from "@assets/black-king.svg";
import styles from "./styles";
import { BLACK, WHITE } from "@services/constants";

interface FigureProps {
  info: Figure;
}
const useStyles = makeStyles(styles);

const FigureComp = ({ info: { color, id, isQueen } }: FigureProps) => {
  const classes = useStyles();

  const description = `${color === WHITE ? WHITE : BLACK}-${
    isQueen ? "queen" : "pawn"
  }`;

  const src = isQueen
    ? color === WHITE
      ? WhiteKing
      : BlackKing
    : color === WHITE
    ? WhitePawn
    : BlackPawn;

  return (
    <img
      onDragStart={(e: React.DragEvent<HTMLImageElement>) =>
        console.log(`dragged ${e.currentTarget.id}`)
      }
      onDrop={(e: any) => console.log(`image drop ${e.currentTarget.id}`)}
      className={classes.img}
      id={id}
      src={src}
      alt={description}
    />
  );
};

export default FigureComp;
