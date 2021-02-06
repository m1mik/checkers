import { createStyles } from "@material-ui/core";
import WoodenTexture from "../../assets/wood_texture.svg";
import theme from "@comps/theme";

const styles = createStyles({
  homePage: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 700px)": {
      flexDirection: "column",
    },
  },
  mainCol: {
    ...theme.classes.center,
    minWidth: "450px",
    "@media (max-width: 700px)": {
      width: "100%",
    },
  },
  asideCol: {
    width: "20%",
    "@media (max-width: 700px)": {
      width: "100%",
      height: "20%",
    },
  },
  figure: {
    width: "40px",
    height: "40px",
  },
  board: {
    display: "flex",
    flexDirection: "column",
    width: "450px",
    height: "450px",
    backgroundImage: `url(${WoodenTexture})`,
  },
  boardDigitColumn: {
    width: "25px",
    height: "100%",
  },
  boardLetterColumn: {
    padding: "0 25px",
    width: "400px",
    height: "25px",
    display: "flex",
  },
  boardCenter: {
    display: "flex",
  },
  boardItself: {
    width: "400px",
    height: "400px",
  },
  boardRow: {
    display: "flex",
  },
  letterCell: {
    width: "50px",
    height: "25px",
    color: "white",
    ...theme.classes.center,
  },
  digitCell: {
    height: "50px",
    width: "25px",
    ...theme.classes.center,
  },
  blackCell: {
    backgroundColor: "#4e342e",
    ...theme.classes.cell,
    ...theme.classes.center,
  },
  whiteCell: {
    backgroundColor: "white",
    ...theme.classes.cell,
    ...theme.classes.center,
  },
});
export default styles;
