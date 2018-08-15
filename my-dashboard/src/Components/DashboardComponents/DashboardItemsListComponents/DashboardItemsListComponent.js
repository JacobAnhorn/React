import React from "react";
import DashboardItemComponent from "./DashboardItemComponent/DashboardItemComponent";
import DashboardItemsListHeader from "./DashboardItemsListHeader";

const buildTestItems = () => {
  var list = [];
  for (var i = 0; i < 10; i++) {
    list.push(<DashboardItemComponent />);
  }
  return list;
};

const DashboardItemsListComponent = props => {
  return (
    <div>
      <DashboardItemsListHeader />
      {buildTestItems()}
    </div>
  );
};

export default DashboardItemsListComponent;
