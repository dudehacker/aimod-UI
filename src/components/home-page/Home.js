import React, {Fragment} from 'react';
import SearchBox from './SearchBox'

const Home = (props) => {
return (
  <Fragment>
    <header className="App-header">
      <Jumbotron />
      <SearchBox history={props.history}/>
    </header>
  </Fragment>
);
};

const Jumbotron = (props) =>{
  return (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">aimod</h1>
      <p className="lead">Check unrankeable issues related to hitsound/images/storyboard</p>
    </div>
  </div>
  );
};

export default Home;
