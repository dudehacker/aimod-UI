import React, {Component} from 'react';
import TabContainer from './TabContainer';
import data from './data.json';
import CircularProgress from '@material-ui/core/CircularProgress';

class ResultsPage extends Component {
    render(){
      return (
        <div>
        <TabContainer data={data}/>
        </div>
      );
    }
}

export default ResultsPage;
