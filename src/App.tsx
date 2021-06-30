import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Login";
import { Register } from "./Register";
import ForgetPassword from "./ForgetPassword";
import Crud from "./Crud";
const Home = () => {
  return (
    <div>
      <h1>register</h1>
      <div>Have some content</div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/Register">Register</Link>
        <br />
        <Link to="/Login">Login</Link>
        <br />
        <Link to="/ForgetPassword">Forget Password</Link>
        <br />
        <Link to="/Crud">Crud</Link>
        <br />
        <Link to={'Crud/create'}> Create Customer </Link>

      </div>

      <Switch>
        <Route path="/Register" exact>
          <Register />
        </Route>
        <Route path="/Login" exact>
          <Login />
        </Route>
        <Route path="/ForgetPassword" exact>
          <ForgetPassword />
        </Route>
        <Route path="/Crud" exact>
          <Crud />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
