import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "rgba(255, 251, 226)",
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));
