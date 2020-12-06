import React, { Component } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

class CigarDetail extends Component {
  constructor() {
    super();
    this.state = {
      cigar: [],
    };
  }

  async getData() {
    const resp = await axios.get(`${baseURL}/`, config);
    // const cigarData = resp.data.records;
    this.setState({ cigar: resp.data.records });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    if (this.state.cigar[0]) {
      return <div>{this.state.cigar[0].fields.cigar}</div>;
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default CigarDetail;
