import React, { Component } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./CigarDetail.css";

class CigarDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cigar: [],
      cigarID: props.match.params.id,
    };
    this.deleteData = this.deleteData.bind(this);
  }

  componentDidMount() {
    // console.log(this.match.params.id);
    this.getData();
  }

  async getData() {
    const resp = await axios.get(`${baseURL}/${this.state.cigarID}`, config);
    // console.log(resp.data.fields);
    this.setState({ cigar: resp.data.fields });
  }

  async deleteData() {
    await axios.delete(`${baseURL}/${this.state.cigarID}`, config);
    this.props.refresh((prev) => !prev);
  }

  render() {
    if (this.state.cigar) {
      return (
        <div className="container">
          <h2>{this.state.cigar.cigar}</h2>
          <div className="cigar-info-container">
            <div className="cigar-detail">
              <div className="rating">
                <h4>Rating: </h4>
                <p id="rating">{this.state.cigar.rating}</p>
              </div>
              <div className="wrapper">
                <h4>Wrapper: </h4>
                <p id="rating">{this.state.cigar.wrapper}</p>
              </div>
              <div className="binder">
                <h4>Binder: </h4>
                <p id="binder">{this.state.cigar.binder}</p>
              </div>
              <div className="filler">
                <h4>Filler: </h4>
                <p id="filler">{this.state.cigar.filler}</p>
              </div>
              <div className="tasting-notes">
                <h4>Tasting Notes: </h4>
                <p id="tasting-notes">{this.state.cigar.tastingNotes} </p>
              </div>
              <div className="review">
                <h4>Review: </h4>
                <p id="review">{this.state.cigar.review} </p>
              </div>
            </div>
            <div className="image-container">
              <img
                src={`${this.state.cigar.photo}`}
                id="image"
                alt={`${this.state.cigar.cigar}`}
              />
            </div>
          </div>
          <div className="button-container">
            <Link to="/cigar/list">
              <button onClick={this.deleteData}>Delete</button>
            </Link>
            <Link to={`/edit/${this.state.cigarID}`}>
              <button>Edit</button>
            </Link>
            <Link to="/cigar/list">
              <button>Back to List</button>
            </Link>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default withRouter(CigarDetail);
