import React, { Component } from "react";
import { saveState } from "./localStorage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import FakeTodoApp from "./components/FakeTodoApp/FakeTodoApp";

class App extends Component {
  componentDidMount() {
    window.addEventListener("beforeunload", () => {
      saveState();
    });
  }

  render() {
    return (
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <PrivateRoute
              exact
              path="/"
              component={Home}
              falseComponent={FakeTodoApp}
            />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
