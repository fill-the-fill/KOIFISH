import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import landingPage from "../src/pages/landing";
import privacyPolicyPage from "../src/pages/privacyPolicy";
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import faqPage from "../src/pages/faq";
import contactPage from "../src/pages/contact"
import { FiChevronUp } from "react-icons/fi";
import "./App.css";

const breakpoints = createBreakpoints({})


const mainTheme = createTheme({
  shadows: ["none"],
  typography: {
    fontFamily: [`futura`],
    h1: {
      color: "#FFFFFF",
      fontSize: 50,
      [breakpoints.down('sm')]: {
        fontSize: 35,
      },
    },
    h2: {
      fontSize: 22,
      color: "#FFFFFF",
    },
    h3:{
      color: "#FFFFFF",
      textAlign: "center",
      fontSize: 32,
      marginBottom: 20,
    },
    h4:{
      fontSize: 20,
      color: "#707070",
      textAlign: 'initial'
    },
    h5:{
      fontSize: 22,
      color: "#C3B96C",
      textAlign: 'initial'
    },
    h6:{
      color: "#C3B96C",
      fontSize: 34,
      marginTop: 20,
    },
    subtitle1: {
      color: "#ffff",
      fontSize: 22,
      marginTop: 16,
    }
  },
});

function App() {


  const [showScroll, setShowScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <Router>
        <Switch>
          <Route exact path="/" component={landingPage} />
          <Route exact path="/contact" component={contactPage} />
          <Route exact path="/privacy-policy" component={privacyPolicyPage} />
          <Route exact path="/faq" component={faqPage} />
        </Switch>
      </Router>
      <FiChevronUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
    </ThemeProvider>
  );
}

export default App;
