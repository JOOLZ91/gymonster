import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    border: "1px grey solid",
    boxShadow: "0 0 5px 1px",
  },
  media: {
    height: 0,
    width: "100%",
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "rgb(213, 214, 170)",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  main: {
    fontFamily: "Play",
  },
}));
