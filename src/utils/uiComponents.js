import { makeStyles } from "@material-ui/core/styles";
// import BackgroundImage from "../utils/images/BG.png";
import MobileBackground from "../utils/images/mobileBackground.png";

import BackgroundImageTest from "../utils/images/BGtest.png"

export const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    backgroundImage: `url(${BackgroundImageTest})`,
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${MobileBackground})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "auto",
    },
  },
  introHeight: {
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      height: 200,
    },
  },

  introHeightPolicy: {
    height: "80vh",
    [theme.breakpoints.down("xs")]: {
      height: 150,
    },
  },

  icoImage: {
    width: "55%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      width: "70%",
      marginTop: 50,
    },
  },
  websitePadding: {
    padding: "0 150px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 40px",
    },
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
  koiLogo: {
    width: "50%",
    display: "block",
    margin: "auto",
    marginTop: 20,
    [theme.breakpoints.down("sm")]: {
      marginTop: 60,
    },
  },
  buyButton: {
    textAlign: "center !important",
    color: "white !important",
    border: "1px solid white !important",
    borderRadius: "5px !important",
    display: "block !important",
    margin: "auto !important",
    marginTop: "50px !important",
    fontSize: "25px !important",
    fontFamily: "futura",
    "&:hover": {
      backgroundColor: "#C3B96C !important",
      border: "1px solid black !important",
      color: "black !important",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px !important",
    },
  },
  homeButton: {
    width: '150px !important',
    textAlign: "center !important",
    color: "white !important",
    border: "1px solid white !important",
    borderRadius: "5px !important",
    display: "block !important",
    margin: "auto !important",
    marginTop: "50px !important",
    fontSize: "25px !important",
    fontFamily: "futura",
    "&:hover": {
      backgroundColor: "#C3B96C !important",
      border: "1px solid black !important",
      color: "black !important",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px !important",
    },
  },
  goldenTitleFish: {
    visibility: "hidden",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      padding: "0 5px",
      visibility: "visible",
      margin: "auto",
      display: "block",
      width: 50,
    },
  },
  history: {
    padding: "0 80px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 5px",
    },
  },
  historyText: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "justify",
      fontSize: 21,
    },
  },
  rockItem: {
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
  line: {
    maxWidth: 13,
  },
  closeIcon: {
    position: "fixed",
    right: 0,
    top: 0,
  },
  hr: {
    margin: "85px 0",
    border: 0,
    height: 1,
    backgroundImage:
      "linear-gradient(to right, rgba(0, 0, 0, 0), #C3B96C, rgba(0, 0, 0, 0))",
    [theme.breakpoints.down("sm")]: {
      margin: "40px 0",
    },
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
  futureDateRight: {
    textAlign: "right !important",
  },
  futureNameRight: {
    textAlign: "right !important",
  },
  futureDescriptionRight: {
    textAlign: "right !important",
  },
  statistic: {
    textAlign: "center",
  },
  statistics: {
    width: "70%",
    margin: "auto",
    display: "block",
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
    objectFit: "cover",
  },
  teamName: {
    textAlign: "center !important",
    marginTop: "10px important",
  },
  teamAbout: {
    textAlign: "center",
    padding: "0px 50px",
  },
  linkedinIcon: {
    color: "#C3B96C",
    border: "3px solid #C3B96C",
    borderRadius: "100%",
    padding: 3,
    marginLeft: 4,
    "&:hover": {
      color: "#897f4e",
    },
    [theme.breakpoints.down("sm")]: {
      border: "1px solid #C3B96C",
      borderRadius: "100%",
      padding: 1,
      marginLeft: 1,
    },
  },
  socialLine: {
    maxHeight: 70,
  },
  socialAbsolute: {
    position: "absolute",
    right: 0,
    marginRight: 20,
  },
  socialAbsoluteMobile: {
    marginTop: 50,
    position: "absolute",
    right: 0,
    marginRight: 35,
    [theme.breakpoints.down("xs")]: {
      marginRight: 24,
      marginTop: 30
    },
  },
  facebookIcon: {
    color: "#C3B96C",
  },
  facebookGrid: {
    marginLeft: "auto",
    paddingTop: 5,
  },
  linkedinGrid: {
    margin: "auto",
    paddingTop: 5,

  },
  footer: {
    fontFamily: "futura",
    marginTop: 20,
    bottom: 0,
    margin: "auto",
    color: "white",
    paddingBottom: 10,
  },
  privacyRedirect: {
    color: "white",
  },
  policy: {
    padding: "0 150px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 40px",
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
    fontSize: 22,
    marginTop: 10,
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },

  exchangeTitle: {
    marginTop: 50,
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      marginTop: 5,
    },
  },
  exchangeText: {
    maxWidth: 550,
    [theme.breakpoints.down("sm")]: {
      textAlign: "justify",
      fontSize: 21,
      padding: "0px 2px",
    },
  },
  exchangeImages: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: 40,
    },
  },
  whitePaperButton: {
    color: "white !important",
    border: "1px solid white !important",
    borderRadius: "5 !important",
    marginTop: "10px !important",
    fontSize: "25px !important",
    fontFamily: "futura !important",
    "&:hover": {
      backgroundColor: "#C3B96C !important",
      border: "1px solid black !important",
      color: "black !important",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px !important",
      // textAlign: "center",
      display: "block !important",
      margin: "auto !important",
    },
  },
  allocationTitle: {
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  allocationText: {
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "justify",
      fontSize: 21,
    },
  },
  allocationImage: {
    width: "110%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  icoTitle: {
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: 20,
    },
  },

  mobileLogo: {
    position: "fixed",
    marginTop: 17,
    right: 0,
    marginRight: 25,
    width: "7%",
  },
  stageSquare: {
    backgroundColor: "#72878e !important",
    opacity: '0.9',
    height: "300px !important",
    width: "300px !important",
    margin: "50px auto 0 auto !important",
    borderRadius: "15% !important",
  },
  stageText: {
    color: "#FFFFFF",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 7,
  },
  stageText2: {
    color: "#C3B96C",
    fontSize: 27,
    textAlign: "center !important",
    marginTop: '3px !important'
  },
  stageText3: {
    color: "#FFFFFF",
    fontSize: 27,
    textAlign: "center",
  },
}));
