import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import { RestaurantContextProvider } from "./context/RestaurantsContext";
import Navbar from "../src/components/layout/Navbar";
import "./App.css";
import Footer from "./components/layout/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import About from "./components/layout/About";
import AuthState from "./context/auth/AuthState";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/PrivateRoute";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <RestaurantContextProvider>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/about" component={About} />
              <PrivateRoute
                exact
                path="/restaurants/:id/update"
                component={UpdatePage}
              />
              <PrivateRoute
                exact
                path="/restaurants/:id"
                component={RestaurantDetailPage}
              />
            </Switch>
          </div>
        </Router>
        <Footer />
      </RestaurantContextProvider>
    </AuthState>
  );
};

export default App;
