import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import { createMuiTheme, ThemeProvider} from "@material-ui/core/";
import landingPage from "../src/pages/landing"
import privacyPolicyPage from "../src/pages/privacyPolicy"
import faqPage from "../src/pages/faq"
import './App.css';

const theme = createMuiTheme({
  shadows: ["none"]
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path='/' component={landingPage}/>
        <Route exact path='/privacy-policy' component={privacyPolicyPage}/>
        <Route exact path='/faq' component={faqPage}/>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
