import React from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import AvatarRaw from "@material-ui/core/Avatar";
import MyFancyComponent from './Graph';
import * as actions from "../store/actions";

const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: "white"
  }
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

const avatarStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: "white"
  }
});
const Avatar = withStyles(avatarStyles)(AvatarRaw);

const styles = {
  card: {
    margin: "5% 25%"
  }
};

class NowWhat extends React.Component {

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader title="Data Visualization with polling.." />
        <CardContent>        
          <MyFancyComponent/>
          </CardContent>
      </Card>
    );
  }
}

const mapDispatch = dispatch => ({
  onLoad: () =>
    dispatch({
      type: actions.TEMP_CHANGED
    })
});

const Connected =  connect(
  null,
  mapDispatch
)(NowWhat);

export default withStyles(styles)(Connected);
