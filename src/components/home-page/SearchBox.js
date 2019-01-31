import React, {
  Fragment,
  Component
} from 'react';
import {
  withRouter
} from 'react-router-dom'
import axios from 'axios';
import MySnackbarContentWrapper from '../CustomAlert';
import Snackbar from '@material-ui/core/Snackbar';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      open: false,
      errorMessage: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      url: event.target.value
    });
  }

  goToResults = (res) => {
    console.log(res);
    this.props.history.push({
      pathname: `/results/${res.data.beatmapSetId}`,
      state: {
        data: res.data
      }
    });
  }

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleError = (error) => {
    this.setState({
      open: true,
      errorMessage: error.response.data
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.get('http://localhost:8080/mod', {
        params: {
          url: this.state.url
        }
      })
      .then(this.goToResults)
      .catch(this.handleError);

  }

  render() {
    const {
      open,
      errorMessage
    } = this.state;
    return ( < Fragment >
      <
      form onSubmit = {
        this.handleSubmit
      }
      className = "form-inline" >
      <
      div className = "form-group mx-lg-4 mb-2" >
      <
      label htmlFor = "mapLink"
      className = "sr-only" > map link < /label> <
      input required name = "map"
      onChange = {
        this.handleChange
      }
      value = {
        this.state.url
      }
      type = "text"
      className = "form-control"
      id = "mapLink"
      placeholder = "map link" > < /input> <
      /div> <
      button type = "submit"
      className = "btn btn-primary mb-2" > Submit < /button> <
      /form> <
      Snackbar anchorOrigin = {
        {
          vertical: 'top',
          horizontal: 'center',
        }
      }
      open = {
        open
      }
      autoHideDuration = {
        5000
      }
      onClose = {
        this.handleClose
      } >
      <
      MySnackbarContentWrapper onClose = {
        this.handleClose
      }
      variant = "error"
      message = {
        errorMessage
      }
      /> <
      /Snackbar>

      <
      /Fragment>
    );
  };
};

export default withRouter(SearchBox);
