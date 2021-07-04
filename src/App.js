import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import { createMuiTheme, ThemeProvider} from "@material-ui/core/";
import landingPage from "../src/pages/landing"
import privacyPolicy from "../src/pages/privacyPolicy"
import './App.css';

const theme = createMuiTheme({
  // typography: {
  //   fontFamily: 'Poppins, sans-serif',
  // },
  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //       '@font-face': 'Poppins, sans-serif',
  //     },
  //   },
  //   MuiDrawer: {
  //     paperAnchorLeft: {
  //       color: 'white',
  //       background: '#0B0500',
  //     }
  //   }
  // },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path='/' component={landingPage}/>
        <Route exact path='/privacy-policy' component={privacyPolicy}/>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
