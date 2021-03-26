import { makeStyles } from "@material-ui/core/styles";
import Image from "../../assets/abs.jpg";

export default makeStyles((theme) => ({
  header: {
    position: "relative",
    height: "400px",
    width: "100%",
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    [theme.breakpoints.down("xs")]: {
      backgroundImage: "none",
      backgroundColor: "black",
      width: "100%",
    },
  },
  picture: {
    borderBottom: "2px solid rgba(91, 55, 88)",
    position: "absolute",
    bottom: "0px",
    left: "0px",
    height: "400px",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.20)",
  },
  contact: {
    position: "absolute",
    bottom: "0px",
    left: "0px",
    height: "400px",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.40)",
  },
  container: {
    display: "flex",
    position: "relative",
    height: "464px",
    width: "600px",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      width: "400px",
    },
  },
  quote: {
    position: "absolute",
    left: "100px",
    color: "rgba(213, 214, 170, 0.8)",
    fontSize: "50px",
    fontFamily: "Orbitron",
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
    },
  },
}));
