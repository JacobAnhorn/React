import { combineReducers } from "redux";
import { areaReducer as areaInformation } from "./AreaReducer/AreaReducer";

const RootReducer = combineReducers({ areaInformation });

export default RootReducer;
