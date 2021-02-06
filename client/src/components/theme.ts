import { createMuiTheme } from "@material-ui/core/styles";

export const draw = createMuiTheme({
  palette: {
    primary: {
      light: "#b3e5fc",
      main: "#039be5",
      dark: "#01579b",
    },
  },
});

const theme = {
  classes: {
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    cell: {
      width: "50px",
      height: "50px",
    },
  },
};

export default theme;
