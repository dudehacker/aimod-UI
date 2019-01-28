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
    backgroundColor: theme.palette.background.paper,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
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
        <header style={{position: "fixed", top:"0", width: "100%"}}>
        <AppBar position="static">
          <Tabs value={value}
          onChange={this.handleChange}
          variant="scrollable"
          scrollButtons="auto"
          >
            {this.props.data.tabs.map( function(tab, index) {
              return <Tab key={index} label= {<Badge className={classes.padding} color="secondary" badgeContent={tab.comments.length}>{tab.name}</Badge>} />;
            } )}
          </Tabs>
        </AppBar>
        <div style={{margin: "auto", width: "50%", textAlign: "center", paddingTop: "2em"}}>
          <a href={this.props.data.url}><h3>{this.props.data.artist} - {this.props.data.title}</h3></a>
          <h4>{this.props.data.mapper}</h4>
        </div>
        </header>
        <div style={{marginTop: "70px"}}>
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
