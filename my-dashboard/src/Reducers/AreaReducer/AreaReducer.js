import InitalState from "../InitialState";
import * as AreaActions from "../../Actions/ActionTypes";

export const areaReducer = (state = InitalState, action) => {
  switch (action.type) {
    case AreaActions.ADD_AREA:
      switch (action.areaType){
        case "small":
          return { ...state, areaSize: state.areaSize - 1, areaTypes: [...state.areaTypes, action.areaType] };
        case "medium":
          return { ...state, areaSize: state.areaSize - 2, areaTypes: [...state.areaTypes, action.areaType] };
        case "large":
          return { ...state, areaSize: state.areaSize - 4, areaTypes: [...state.areaTypes, action.areaType] };
        default:
          return state;
      }
    case AreaActions.SHOW_OR_HIDE_WIDGETS_FOR_AREA:
      return { ...state, isSelectingWidget: action.isSelectingWidget };
    default:
      return state;
  }
};
