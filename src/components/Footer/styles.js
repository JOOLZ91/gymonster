import { makeStyles } from "@material-ui/core/styles";
import Image from "../../assets/abs.jpg";

export default makeStyles((theme) => ({
  footer: {
    position: "relative",
    height: "400px",
    width: "100%",
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    [theme.breakpoints.down("xs")]: {
      height: "150px",
      backgroundImage: "none",
      backgroundColor: "black",
    },
  },
  picture: {
    borderTop: "2px solid rgba(91, 55, 88)",
    position: "absolute",
    bottom: "0px",
    left: "0px",
    height: "400px",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.20)",
    [theme.breakpoints.down("xs")]: {
      height: "150px",
    },
  },
  contact: {
    position: "absolute",
    bottom: "0px",
    left: "0px",
    height: "400px",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.40)",
    [theme.breakpoints.down("xs")]: {
      height: "150px",
    },
  },
  container: {
    display: "flex",
    position: "relative",
    height: "400px",
    width: "600px",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      width: "400px",
      height: "150px",
    },
  },
  quote: {
    position: "absolute",
    top: "250px",
    left: "100px",
    color: "rgba(213, 214, 170, 0.8)",
    fontSize: "50px",
    fontFamily: "Orbitron",
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
      top: "40px",
    },
  },
}));
