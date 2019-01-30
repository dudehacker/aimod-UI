import React, {Fragment, Component} from 'react';
import { withRouter } from 'react-router-dom'

class SearchBox extends Component{
  constructor(props) {
    super(props);
    this.state = {url: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({url: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/results/${this.state.url}`);
  }

  render(){

  return (<Fragment>
    <form onSubmit={this.handleSubmit} className="form-inline">
    <div className="form-group mx-lg-4 mb-2">
    <label htmlFor="mapLink" className="sr-only">map link</label>
    <input required
    name="map"
    onChange={this.handleChange}
    value={this.state.url}
    type="text" className="form-control" id="mapLink"
    placeholder="map link"></input>
  </div>
  <button type="submit" className="btn btn-primary mb-2">Submit</button>
</form>
    </Fragment>);
  };
};

export default withRouter(SearchBox);
