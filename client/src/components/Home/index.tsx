import React, { useCallback } from "react";
import { AppState } from "@store/types";
import { Button, makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { startGame } from "@store/actions/game";
import Cell from "@models/Cell";
import styles from "./styles";
import CellComp from "./deps/CellComp";
import { A_CHAR_CODE } from "@services/constants";

const useStyles = makeStyles(styles);

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const board = useSelector((state: AppState) => state.game.board);

  const getLetterRow = useCallback(
    () =>
      new Array(8)
        .fill(1)
        .map((value: any, index: number) => (
          <div className={classes.letterCell}>{`${String.fromCharCode(
            A_CHAR_CODE + index
          )}`}</div>
        )),
    [classes]
  );

  const getDigitColumn = useCallback(
    () =>
      new Array(8)
        .fill(1)
        .map((value: number, index: number, array: number[]) => (
          <div className={classes.digitCell}>{`${array.length - index}`}</div>
        )),
    [classes]
  );

  const drawCell = useCallback((cell: Cell) => <CellComp cell={cell} />, []);

  return (
    <div className={classes.homePage}>
      <aside className={classes.asideCol}></aside>
      <div className={classes.mainCol}>
        <div className={classes.board}>
          <div className={classes.boardLetterColumn}>{getLetterRow()}</div>
          <div className={classes.boardCenter}>
            <div className={classes.boardDigitColumn}>{getDigitColumn()}</div>
            <div className={classes.boardItself}>
              {board.length &&
                board.map((row: Cell[], index: number) => (
                  <div className={classes.boardRow} key={index}>
                    {row.map(drawCell)}
                  </div>
                ))}
            </div>
            <div className={classes.boardDigitColumn}>{getDigitColumn()}</div>
          </div>
          <div className={classes.boardLetterColumn}>{getLetterRow()}</div>
        </div>
      </div>
      <aside className={classes.asideCol}>
        <Button variant="contained" onClick={() => dispatch(startGame())}>
          Start
        </Button>
      </aside>
    </div>
  );
};

export default Home;
