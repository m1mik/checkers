import { createStyles, Theme } from "@material-ui/core";
import theme from "@comps/theme";

const styles = (draw: Theme) =>
  createStyles({
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
