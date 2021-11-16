import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Home/Home/Home';
import Explore from './Explore/Explore';
import Navigation from './Shared/Navigation/Navigation';
import Purchase from './Purchase/Purchase';
import Footer from './Shared/Footer/Footer';
import Login from './Login/Login';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import NotFound from './NotFound/Notfound';
import AdminDashBoard from './Admin/AdminDashBoard/AdminDashBoard';
import MyOrders from './Admin/MyOrders/MyOrders';



function App() {
  return (
    <div className="App">
      <AuthProvider>
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
          <PrivateRoute  path="/products/:serviceId">
            <Purchase/>
          </PrivateRoute>
          <PrivateRoute  path="/admin">
              <AdminDashBoard/>
          </PrivateRoute>
          <PrivateRoute path="/myOrders">
              <MyOrders/>
            </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer></Footer>
    </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
