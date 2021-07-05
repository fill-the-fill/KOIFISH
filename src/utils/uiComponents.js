import { makeStyles } from "@material-ui/core/styles";
import BackgroundImage from "../utils/images/BG.png";

export const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    // padding: '0px 100px',
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  header: {
    background: "transparent",
    boxShadow: "none",
  },
  headerHref: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "#C3B96C",
    },
  },
  koiLogo: {
    width: "50%",
    display: "block",
    margin: "auto",
  },
  buyButton: {
    textAlign: "center",
    color: "white",
    border: "1px solid white",
    borderRadius: 5,
    display: "block",
    margin: "auto",
    fontSize: 20,
    "&:hover": {
      backgroundColor: "#C3B96C",
      border: "1px solid black",
      color: "black",
    },
  },
  title: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 30,
    paddingTop: 90,
  },
  goldenTitleFish: {
    display: "block",
    margin: "auto",
    width: 70,
  },
  history: {
    padding: "0 80px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 5px",
    },
  },
  historyText: {
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 20,
  },
  rockItem: {
    paddingBottom: 40,
  },
  line: {
    maxWidth: 13,
  },
  rock: {
    width: 200,
    margin: "auto",
    display: "block",
    [theme.breakpoints.down("md")]: {
      width: 150,
    },
    [theme.breakpoints.down("sm")]: {
      width: 50,
    },
  },
  futureContainer: {
    margin: "auto",
    display: "block",
  },
  futureDate: {
    color: "#707070",
  },
  futureDateRight: {
    color: "#707070",
    textAlign: "right",
  },
  futureName: {
    color: "#C3B96C",
  },
  futureNameRight: {
    color: "#C3B96C",
    textAlign: "right",
  },
  futureDescription: {
    color: "#FFFFFF",
  },
  futureDescriptionRight: {
    color: "#FFFFFF",
    textAlign: "right",
  },
  statistics: {
    width: "70%",
    margin: "auto",
    display: "block",
  },
  statiscticsNumbers: {
    color: "white",
    fontSize: 17,
  },
  statisticImg: {
    width: "30%",
  },
  statisticName: {
    color: "#C3B96C",
    fontSize: 20,
    paddingBottom: 7,
  },
  member: {
    padding: "0 30px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px 30px",
    },
  },
  teamImage: {
    height: 250,
    margin: "auto",
    display: "block",
  },
  teamName: {
    textAlign: "center",
    marginTop: 10,
    color: "#C3B96C",
  },
  teamAbout: {
    textAlign: "center",
    color: "white",
    padding: "0px 50px",
  },
  linkedinIcon: {
    color: "#C3B96C",
  },
  facebookIcon: {
    color: "#C3B96C",
  },
  facebookGrid: {
    marginLeft: "auto",
    paddingTop: 5,
  },
  linkedinGrid: {
    marginRight: "auto",
    paddingTop: 5,
  },
  footer: {
    marginTop: "calc(5% + 60px)",
    bottom: 0,
    margin: "auto",
    color: "white",
    paddingBottom: 10,
  },
  privacyRedirect: {
    color: "white",
  },
}));
