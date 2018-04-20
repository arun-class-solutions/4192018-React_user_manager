import { createStore, compose, applyMiddleware } from "redux";
import createBrowserHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

export default () => {
  const history = createBrowserHistory();
  const reactRouterMiddleware = routerMiddleware(history);

  return createStore(
    rootReducer,
    undefined,
    compose(applyMiddleware(thunk, reactRouterMiddleware))
  );
}
