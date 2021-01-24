import React from "react";
import NavBar from "../NavBar";
import Home from "../Home";
import Users from "../Users";
import User from "../User";

import { Route, Switch, useLocation } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./routes.css";

export default function Routes({ onSubmit, users, deleteUser }) {
  let location = useLocation();
  return (
    <React.Fragment>
      {/* Home */}
      <Route path="/" component={NavBar} />
      {/* <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}> */}
          <Switch location={location}>
            <Route exact path="/">
              <Home onSubmit={onSubmit} />
            </Route>

            {/* Users */}
            <Route exact path="/users">
              <Users users={users} deleteUser={deleteUser} />
            </Route>

            {/* User */}
            <Route exact path="/users/user/:userId">
              <User users={users} />
            </Route>
          </Switch>
        {/* </CSSTransition>
      </TransitionGroup> */}
    </React.Fragment>
  );
}
