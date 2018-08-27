import * as Actions from "../ActionTypes";

export const addArea = () => {
  return { type: Actions.ADD_AREA, areaType: "temp" };
};

export const showWidgetSelectionForArea = isSelectingWidget => {
  return {
    type: Actions.SHOW_OR_HIDE_WIDGETS_FOR_AREA,
    isSelectingWidget: isSelectingWidget
  };
};
