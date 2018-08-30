import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as AreaActions from "../../../Actions/SpecificActions/AreaActions";

const areaContainerStyle = {
  borderRadius: "25px",
  border: "3px dashed #a0a0a0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "90vh",
  bottom: "0",
  width: "25%",
  color: "#a0a0a0",
  flexDirection: "column"
};

const DashboardAreaComponent = props => {
  return (
    <div style={areaContainerStyle}>
      <button
        onClick={() => props.areaActions.showWidgetSelectionForArea(true)}
      >
        +
      </button>
      <p>Add new widget!</p>
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
