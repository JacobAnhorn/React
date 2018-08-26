import InitalState from "../InitialState";
import * as AreaActions from "../../Actions/ActionTypes";

export const areaReducer = (state = InitalState, action) => {
  switch (action.type) {
    case AreaActions.ADD_AREA:
      console.log("added");
      return { ...state, areaTypes: [...state.areaTypes, action.areaType] };
    default:
      return state;
  }
};
