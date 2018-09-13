import * as Actions from "../ActionTypes";

export const addArea = (size) => {
  return { type: Actions.ADD_AREA, areaType: size };
};

export const showWidgetSelectionForArea = isSelectingWidget => {
  return {
    type: Actions.SHOW_OR_HIDE_WIDGETS_FOR_AREA,
    isSelectingWidget: isSelectingWidget
  };
};
