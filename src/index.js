import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

// React Router 4 modules
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import UserList from "./UserList";
import EditUser from "./EditUser";

// Optimize production bundle
registerServiceWorker();

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={UserList} />
      <Route exact path="/:id/edit" component={EditUser} />
    </Switch>
  </Router>
  ,
  document.getElementById("root")
);
