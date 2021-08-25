import React, { Fragment, Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { Input } from "@material-ui/core";

const filterFiles = (files) => {
  files = [...files].filter((file) => {
    let ext = file.name.split(".").pop();
    return ["wav", "ogg", "osu", "mp3"].includes(ext);
  });
  console.log(files);
  return files;
};

class UploadBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      folder: null,
    };
  }

  onChangeHandler = (event) => {
    console.log(event.target.files);
    let folder = event.target.files[0].webkitRelativePath.split("/")[0]
    console.log(folder)
    this.setState({
      files: filterFiles(event.target.files),
      folder: folder,
    });
  };

  goToResults = (res) => {
    this.props.history.push({
      pathname: `/results/${res.data.beatmapSetId}`,
      state: {
        data: res.data,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append("folder",this.state.folder)
    for (const key of Object.keys(this.state.files)) {
      formData.append("files", this.state.files[key]);
    }

    axios
      .post("http://localhost:8888/upload", formData)
      .then(this.goToResults)
      .catch(this.handleError);
  };

  render() {
    return (
      <Fragment>
        <Input
          //   multiple
          inputProps={{ directory: "", webkitdirectory: "" }}
          accept="audio/wav,audio/mpeg,audio/ogg"
          type="file"
          name="file"
          onChange={this.onChangeHandler}
        />

        <Button
          variant="contained"
          component="label"
          onClick={this.handleSubmit}
          color="primary"
          disabled = {!this.state.files.length>0}
        >
          Submit
        </Button>
      </Fragment>
    );
  }
}

export default withRouter(UploadBox);
