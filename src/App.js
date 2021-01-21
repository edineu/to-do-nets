// import GlobalStyle from "./globalStyles";

import "./App.css";
// Navigation//
import Nav from "./Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div>
        <Router>
          <Nav/>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Shop" component={Shop} />
              <Route path="/" render={() => <div>404</div>} />
            </Switch>
          <div className="App"> </div>
        </Router>
    </div>
  );
}

export default App;
