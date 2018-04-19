import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import UserList from "./UserList";

// Optimize production bundle
registerServiceWorker();

ReactDOM.render(
  <UserList />,
  document.getElementById("root")
);
