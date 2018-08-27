import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const DashboardWidgetListHeader = props => {
  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={props.index}
          onChange={props.handleChange}
          indicatorColor="primary"
          textColor="primary"
          fullWidth
        >
          <Tab label="Small Items" />
          <Tab label="Medium Items" />
          <Tab label="Large Items" />
        </Tabs>
      </AppBar>
    </div>
  );
};

export default DashboardWidgetListHeader;
