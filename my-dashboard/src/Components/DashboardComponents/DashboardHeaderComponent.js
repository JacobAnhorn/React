import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as AreaActions from "../../Actions/SpecificActions/AreaActions";

const DashboardHeaderComponent = props => {
  return (
    <div>
      <button onClick={() => props.areaActions.addArea()}>Add Widget</button>
    </div>
  );
};
//May not need access to all actions
const mapDispatchToProps = dispatch => {
  return {
    areaActions: bindActionCreators(AreaActions, dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DashboardHeaderComponent);
