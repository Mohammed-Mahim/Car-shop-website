import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home/Home';
import Explore from './Explore/Explore';
import Navigation from './Shared/Navigation/Navigation';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/explore">
            <Explore/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
