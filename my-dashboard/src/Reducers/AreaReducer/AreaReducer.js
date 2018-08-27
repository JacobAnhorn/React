import InitalState from "../InitialState";
import * as AreaActions from "../../Actions/ActionTypes";

export const areaReducer = (state = InitalState, action) => {
  switch (action.type) {
    case AreaActions.ADD_AREA:
      return { ...state, areaTypes: [...state.areaTypes, action.areaType] };
    case AreaActions.SHOW_OR_HIDE_WIDGETS_FOR_AREA:
      return { ...state, isSelectingWidget: action.isSelectingWidget };
    default:
      return state;
  }
};
