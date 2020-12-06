import React, { Component } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { withRouter } from "react-router";

class CigarDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cigar: [],
      cigarID: props.match.params.id,
    };
  }

  componentDidMount() {
    // console.log(this.match.params.id);
    this.getData();
  }

  async getData() {
    const resp = await axios.get(`${baseURL}/${this.state.cigarID}`, config);
    console.log(resp.data.fields);
    this.setState({ cigar: resp.data.fields });
  }

  render() {
    if (this.state.cigar) {
      return <div>{this.state.cigar.cigar}</div>;
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default withRouter(CigarDetail);
