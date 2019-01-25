import React, {Fragment} from 'react';

const SearchBox = (props) => {
  return (<Fragment>
    <form className="form-inline">
    <div className="form-group mx-lg-4 mb-2">
    <label htmlFor="mapLink" className="sr-only">map link</label>
    <input type="text" className="form-control" id="mapLink" placeholder="map link"></input>
  </div>
  <button type="submit" className="btn btn-primary mb-2">Submit</button>
</form>
    </Fragment>);
};



export default SearchBox;
