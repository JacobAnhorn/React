import React from "react";
import DashboardWidgetComponent from "./DashboardWidgetComponent/DashboardWidgetComponent";
import DashboardWidgetListHeader from "./DashboardWidgetListHeader";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as AreaActions from "../../../Actions/SpecificActions/AreaActions";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import SwipeableViews from "react-swipeable-views";
import { compose } from "recompose";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

const buildTestItems = () => {
  var list = [];
  for (var i = 0; i < 10; i++) {
    list.push(<DashboardWidgetComponent key={i} />);
  }
  return list;
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  }
});

class DashboardWidgetListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };

    this.handleIndexChange = this.handleIndexChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index) {
    this.setState({ index });
  }

  handleIndexChange(index) {
    this.setState({ index: index });
  }

  render() {
    const { theme } = this.props;
    return (
      <ClickAwayListener
        onClickAway={() =>
          this.props.areaActions.showWidgetSelectionForArea(false)
        }
      >
        <DashboardWidgetListHeader
          index={this.state.index}
          handleChange={this.handleChange}
        />
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.index}
          onChangeIndex={this.handleIndexChange}
        >
          <TabContainer dir={theme.direction}>Item One</TabContainer>
          <TabContainer dir={theme.direction}>Item Two</TabContainer>
          <TabContainer dir={theme.direction}>Item Three</TabContainer>
        </SwipeableViews>
        {buildTestItems()}
      </ClickAwayListener>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    areaActions: bindActionCreators(AreaActions, dispatch)
  };
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(
    null,
    mapDispatchToProps
  )
)(DashboardWidgetListComponent);
