import React, { Component } from "react";
import DashboardWidgetListComponent from "./DashboardWidgetListComponents/DashboardWidgetListComponent";
import DashboardHeaderComponent from "./DashboardHeaderComponent";
import DashboardAreaComponent from "./DashboardAreaComponents/DashboardAreaComponent";
import { connect } from "react-redux";

class DashboardComponent extends Component {
  render() {
    let areas = this.props.areas.map((name, index) => {
      return <DashboardAreaComponent key={index} />;
    });
    return (
      <React.Fragment>
        <DashboardHeaderComponent />
        {areas}
        <DashboardWidgetListComponent />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    areas: state.areaInformation.areaTypes
  };
}

export default connect(mapStateToProps)(DashboardComponent);
