import React from 'react';
import TabContainer from './TabContainer';
import data from './data.json';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const ResultsPage = (props) => {
  console.log(props.match.params.mapId);
      return (
        <div>
        <AppBar position="static" style={{paddingTop: "1em", paddingBottom: "1em"}}>
        <Typography variant="h6" color="inherit" noWrap>
            <Button style={{color: 'white'}} size="large">ai mod</Button>
          </Typography>
        </AppBar>
        <TabContainer data={data}/>
        </div>
      );
}

export default ResultsPage;
