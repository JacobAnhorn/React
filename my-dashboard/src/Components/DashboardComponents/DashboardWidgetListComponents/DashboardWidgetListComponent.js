import React from "react";
import DashboardWidgetComponent from "./DashboardWidgetComponent/DashboardWidgetComponent";
import DashboardWidgetListHeader from "./DashboardWidgetListHeader";

const buildTestItems = () => {
  var list = [];
  for (var i = 0; i < 10; i++) {
    list.push(<DashboardWidgetComponent />);
  }
  return list;
};

const DashboardWidgetListComponent = props => {
  return (
    <div>
      <DashboardWidgetListHeader />
      {buildTestItems()}
    </div>
  );
};

export default DashboardWidgetListComponent;
