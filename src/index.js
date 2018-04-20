import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

// React Router 4 modules
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

// Application components
import UserList from "./UserList";
import EditUser from "./EditUser";

import { Provider } from "react-redux";

import createStore from "./config/createStore";

// Create Redux store
const store = createStore();

// Optimize production bundle
registerServiceWorker();

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route exact path="/:id/edit" component={EditUser} />
      </Switch>
    </Router>
  </Provider>
  ,
  document.getElementById("root")
);
