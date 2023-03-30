import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
// import About from "./components/About";
// import NotFound from "./components/NotFound";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route path="/about" component={About} /> */}
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
