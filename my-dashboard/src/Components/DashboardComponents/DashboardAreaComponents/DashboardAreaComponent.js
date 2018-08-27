import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as AreaActions from "../../../Actions/SpecificActions/AreaActions";

const DashboardAreaComponent = props => {
  return (
    <div>
      <button
        onClick={() => props.areaActions.showWidgetSelectionForArea(true)}
      >
        +
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    areaActions: bindActionCreators(AreaActions, dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DashboardAreaComponent);
