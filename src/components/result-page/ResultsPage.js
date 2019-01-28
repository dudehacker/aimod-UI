import React, {Component} from 'react';
import TabContainer from './TabContainer';
import data from './data.json';

class ResultsPage extends Component {
    render(){
      return (
        <TabContainer data={data}/>
      );
    }
}

export default ResultsPage;
