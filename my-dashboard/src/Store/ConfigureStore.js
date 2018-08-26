import { createStore, applyMiddleware } from "redux";
import RootReducer from "../Reducers/RootReducer";
import thunk from "redux-thunk";
import InitialState from "../Reducers/InitialState";

export const ConfigureStore = () => {
  return createStore(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
    InitialState
  );
};
