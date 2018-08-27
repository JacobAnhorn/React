import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as AreaActions from "../../Actions/SpecificActions/AreaActions";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const DashboardHeaderComponent = props => {
  return (
    <div>
      <Toolbar>
        <Button onClick={() => props.areaActions.addArea()}>Add Widget </Button>
      </Toolbar>
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
