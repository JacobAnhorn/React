import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as AreaActions from "../../Actions/SpecificActions/AreaActions";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Popper from "@material-ui/core/Popper"



class DashboardHeaderComponent extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showPopper: false,
      popperAnchor: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.checkForRoom = this.checkForRoom.bind(this);
    this.addArea = this.addArea.bind(this);
  }

  handleClick(event) {
    const { currentTarget } = event;
    this.setState(state => ({
      popperAnchor: currentTarget,
      showPopper: !state.showPopper,
    }));
  };

  //
  checkForRoom(size) {
    return this.props.areaInfo.areaSize - size >= 0;
  }

  addArea(size) {
    this.props.areaActions.addArea(size)
  }

  render() {
  return (
    <div>
      <Toolbar>
        <Button onClick={this.handleClick}>Add Widget </Button>
        <Popper anchorEl={this.state.popperAnchor} open={this.state.showPopper}>
    <Button onClick={() => this.checkForRoom(1) ? this.addArea("small") : null}>Small</Button>
    <Button onClick={() => this.checkForRoom(2) ? this.addArea("medium") : null}>Medium</Button>
    <Button onClick={() => this.checkForRoom(4) ? this.addArea("large") : null}>Large</Button>
  </Popper>
      </Toolbar>
    </div>
  );
};
}
//May not need access to all actions
const mapDispatchToProps = dispatch => {
  return {
    areaActions: bindActionCreators(AreaActions, dispatch)
  };
};

function mapStateToProps(state) {
  return {
    areaInfo: state.areaInformation
    };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardHeaderComponent);
