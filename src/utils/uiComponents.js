import { makeStyles } from "@material-ui/core/styles";
import BackgroundImage from "../utils/images/BG.png";

export const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    // padding: '0px 100px',
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  websitePadding: {
    padding: "0 150px",
  },

  header: {
    background: "transparent !important",
    boxShadow: "none",
  },
  headerHref: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "#C3B96C",
    },
  },
  headerdiv: {
    fontFamily: "futura",
    fontSize: 24,
  },
  koiLogo: {
    width: "50%",
    display: "block",
    margin: "auto",
    marginTop: 20,
  },
  buyButton: {
    textAlign: "center !important",
    color: "white !important",
    border: "1px solid white !important",
    borderRadius: 5,
    display: "block !important",
    margin: "auto !important",
    marginTop: "50px !important",
    fontSize: 25,
    fontFamily: "futura",
    "&:hover": {
      backgroundColor: "#C3B96C !important",
      border: "1px solid black !important",
      color: "black !important",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "60px !important",
    },
  },
  title: {
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "futura",
    fontSize: 32,
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
    fontFamily: "futura",
    fontSize: 24,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 21,
      padding: "0px 2px",
    },
  },
  rockItem: {
    paddingBotto: 40,
  },
  line: {
    maxWidth: 13,
  },
  closeIcon: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  hr: {
    margin: "85px 0",
    border: 0,
    height: 1,
    backgroundImage:
      "linear-gradient(to right, rgba(0, 0, 0, 0), #C3B96C, rgba(0, 0, 0, 0))",
  },
  backgroundDrawer: {
    position: "fixed",
    top: 0,
    right: 0,
    background: "transparent !important",
    color: "#C3B96C",
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
  future: {
    padding: "0px 20px",
  },
  futureContainer: {
    margin: "auto",
    display: "block",
  },
  futureDate: {
    fontSize: 20,
    fontFamily: "futura",
    color: "#707070",
  },
  futureDateRight: {
    fontSize: 20,
    fontFamily: "futura",
    color: "#707070",
    textAlign: "right",
  },
  futureName: {
    fontSize: 24,
    fontFamily: "futura",
    color: "#C3B96C",
  },
  futureNameRight: {
    fontSize: 24,
    fontFamily: "futura",
    color: "#C3B96C",
    textAlign: "right",
  },
  futureDescription: {
    fontSize: 24,
    fontFamily: "futura",
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  futureDescriptionRight: {
    fontSize: 24,
    fontFamily: "futura",
    color: "#FFFFFF",
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  statistic: {
    textAlign: "center",
  },
  statistics: {
    width: "70%",
    margin: "auto",
    display: "block",
  },
  statiscticsNumbers: {
    fontFamily: "futura",
    color: "white",
    fontSize: 24,
  },
  statisticImg: {
    width: "30%",
  },
  statisticName: {
    fontFamily: "futura",
    color: "#C3B96C",
    fontSize: 26,
    paddingBottom: 7,
  },
  member: {
    padding: "0 30px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px 30px",
    },
  },
  teamImage: {
    display: "block",
    width: 200,
    height: 220,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    borderRadius: "15%",
    margin: "auto",
  },
  teamName: {
    fontFamily: "futura",
    textAlign: "center",
    marginTop: 10,
    color: "#C3B96C",
    fontSize: 22,
  },
  teamAbout: {
    fontFamily: "futura",
    textAlign: "center",
    color: "white",
    padding: "0px 50px",
    fontSize: 20,
  },
  linkedinIcon: {
    color: "#C3B96C",
    border: "3px solid #C3B96C",
    borderRadius: "100%",
  },
  socialsBorder: {},
  socialLine: {
    maxHeight: 70,
  },
  socialAbsolute: {
    position: "absolute",
    right: 0,
    marginRight: 20,
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
    fontFamily: "futura",
    marginTop: "calc(5% + 60px)",
    bottom: 0,
    margin: "auto",
    color: "white",
    paddingBottom: 10,
  },
  privacyRedirect: {
    color: "white",
  },
  policy: {
    padding: "40px 80px 0px 80px",
    [theme.breakpoints.down("xs")]: {
      padding: "40px 40px 0px 40px",
    },
  },
  policyHeader: {
    color: "#C3B96C",
    fontFamily: "futura",
    fontSize: 34,
    marginTop: 20,
    [theme.breakpoints.down("xs")]: {
      fontSize: 28,
    },
  },
  policyText: {
    color: "#ffff",
    fontFamily: "futura",
    fontSize: 24,
    marginTop: 16,
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },

  exchangeTitle: {
    color: "#FFFFFF",
    fontFamily: "futura",
    fontSize: 50,
    marginTop: 50,
  },
  exchangeText: {
    fontFamily: "futura",
    fontSize: 20,
    color: "#FFFFFF",
    maxWidth: 550,
    // textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 21,
      padding: "0px 2px",
    },
  },
  whitePaperButton: {
    color: "white !important",
    border: "1px solid white !important",
    borderRadius: 5,
    marginTop: "10px !important",
    fontSize: 25,
    fontFamily: "futura",
    "&:hover": {
      backgroundColor: "#C3B96C !important",
      border: "1px solid black !important",
      color: "black !important",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "60px !important",
    },
  },
  allocationTitle: {
    color: "#FFFFFF",
    fontFamily: "futura",
    fontSize: 50,
    textAlign: "right",
    marginTop: 100,
  },
  allocationText: {
    fontFamily: "futura",
    fontSize: 20,
    color: "#FFFFFF",
    textAlign: "right",
    // textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 21,
      padding: "0px 2px",
    },
  },
  icoTitle: {
    color: "#FFFFFF",
    fontFamily: "futura",
    fontSize: 50,
    textAlign: "right",
  },

  stageSquare: {
    backgroundColor: "#897f4e !important",
    height: "170 !important",
    width: "170 !important",
    margin: "50px auto 0 auto !important",
    borderRadius: "25% !important",
  },
  stageText: {
    color: "#FFFFFF",
    fontFamily: "futura",
    fontSize: 30,
    textAlign: "center",
  },
}));
