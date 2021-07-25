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
    fontFamily: 'futura',
    fontSize: 24
  },
  koiLogo: {
    width: "50%",
    display: "block",
    margin: "auto",
  },
  buyButton: {
    textAlign: "center !important",
    color: "white !important",
    border: "1px solid white !important",
    borderRadius: 5,
    display: "block !important",
    margin: "auto !important",
    fontSize: 25,
    fontFamily: 'futura',
    "&:hover": {
      backgroundColor: "#C3B96C !important",
      border: "1px solid black !important",
      color: "black !important",
    },
  },
  title: {
    color: "#FFFFFF",
    textAlign: "center",
    paddingTop: 90,
    fontFamily: 'futura',
    fontSize: 32
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
    fontFamily: 'futura',
    fontSize: 24,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 20,
    [theme.breakpoints.down("sm")]: {
    fontSize: 18,
    padding: '0px 13px'
    },
  },
  rockItem: {
    // paddingBottom: 40,
    padding: '0px 0px 40px 40px'
  },
  line: {
    maxWidth: 13,
  },
  backgroundDrawer: {
    position: 'fixed',
    top: 0,
    right: 0,
    background: 'transparent !important',
    color:'#C3B96C',
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
    padding: '0px 20px'
  },
  futureContainer: {
    margin: "auto",
    display: "block",
  },
  futureDate: {
    fontSize: 20,
    fontFamily: 'futura',
    color: "#707070",
  },
  futureDateRight: {
    fontSize: 20,
    fontFamily: 'futura',
    color: "#707070",
    textAlign: "right",
  },
  futureName: {
    fontSize: 24,
    fontFamily: 'futura',
    color: "#C3B96C",
  },
  futureNameRight: {
    fontSize: 24,
    fontFamily: 'futura',
    color: "#C3B96C",
    textAlign: "right",
  },
  futureDescription: {
    fontSize: 24,
    fontFamily: 'futura',
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  futureDescriptionRight: {
    fontSize: 24,
    fontFamily: 'futura',
    color: "#FFFFFF",
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  statistic: {
    textAlign: 'center'
  },
  statistics: {
    width: "70%",
    margin: "auto",
    display: "block",
  },
  statiscticsNumbers: {
    fontFamily: 'futura',
    color: "white",
    fontSize: 24,
  },
  statisticImg: {
    width: "30%",
  },
  statisticName: {
    fontFamily: 'futura',
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
    height: 250,
    margin: "auto",
    display: "block",
  },
  teamName: {
    fontFamily: 'futura',
    textAlign: "center",
    marginTop: 10,
    color: "#C3B96C",
    fontSize: 22,
  },
  teamAbout: {
    fontFamily: 'futura',
    textAlign: "center",
    color: "white",
    padding: "0px 50px",
    fontSize: 20,
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
    fontFamily: 'futura',
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
    padding: '40px 80px 0px 80px',
    [theme.breakpoints.down("xs")]: {
      padding: '40px 40px 0px 40px',
    },
  },
  policyHeader: {
    color: '#C3B96C',
    fontFamily: 'futura',
    fontSize: 34,
    [theme.breakpoints.down("xs")]: {
      fontSize: 28,
    },
  },
  policyText: {
    color: '#ffff',
    fontFamily: 'futura',
    fontSize: 24,
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  }
}));
