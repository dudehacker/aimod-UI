import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import React from 'react'
import Badge from '@material-ui/core/Badge';
import TabContent from './TabContent';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    top: '50px',
    backgroundColor: theme.palette.background.paper,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
  header:{
    margin: "auto",
    width: "50%",
    textAlign: "center",
    paddingBottom: "2em",
  },
  tabs: {
    margin: "auto",
    width: "60%",
    backgroundColor: "#6573c3"
  }
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <header style={{margin: "auto"}}>
        <div className={classes.header}>
          <a href={this.props.data.url}><h3>{this.props.data.artist} - {this.props.data.title}</h3></a>
          <h4>{this.props.data.mapper}</h4>
        </div>
        <AppBar position="static" className={classes.tabs}>
          <Tabs value={value}
          onChange={this.handleChange}
          centered
          // variant="scrollable" scrollButtons="auto"
          >
            {this.props.data.tabs.map( function(tab, index) {
              return <Tab key={index} label= {<Badge className={classes.padding} color="secondary" badgeContent={tab.comments.length}>{tab.name}</Badge>} />;
            } )}
          </Tabs>
          </AppBar>

        </header>
        <div>
        <TabContainer>
          <TabContent data={this.props.data.tabs[value]}></TabContent>
        </TabContainer>
        </div>
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
