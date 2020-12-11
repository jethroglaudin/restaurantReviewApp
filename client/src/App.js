import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import { RestaurantContextProvider } from "./context/RestaurantsContext";
import Navbar from "../src/components/layout/Navbar";
import "./App.css";
import Footer from "./components/layout/Footer";
import Login from "./components/auth/Login";

const App = () => {
  return (
    <RestaurantContextProvider>
      <div className="container">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/restaurants/:id/update"
              component={UpdatePage}
            />
            <Route
              exact
              path="/restaurants/:id"
              component={RestaurantDetailPage}
            />
          </Switch>
        </Router>
      </div>
      <Footer />
    </RestaurantContextProvider>
  );
};

export default App;
