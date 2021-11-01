import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import landingPage from "../src/pages/landing";
import privacyPolicyPage from "../src/pages/privacyPolicy";
import faqPage from "../src/pages/faq";
import "./App.css";

const mainTheme = createTheme({
  shadows: ["none"],
  typography: {
    fontFamily: [`futura`],
    h1: {
      color: "#FFFFFF",
      fontSize: 50,
    },
    h2: {
      fontSize: 22,
      color: "#FFFFFF",
    },
    h3:{
      color: "#FFFFFF",
      textAlign: "center",
      fontSize: 32,
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
  return (
    <ThemeProvider theme={mainTheme}>
      <Router>
        <Switch>
          <Route exact path="/" component={landingPage} />
          <Route exact path="/privacy-policy" component={privacyPolicyPage} />
          <Route exact path="/faq" component={faqPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
