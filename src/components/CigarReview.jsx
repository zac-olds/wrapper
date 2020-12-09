import React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { baseURL, config } from "../services";
import axios from "axios";
import "./CigarReview.css";

function CigarReview(props) {
  // Setting up state for each cigar input
  const [author, setAuthor] = useState("");
  const [cigar, setCigar] = useState("");
  const [rating, setRating] = useState("");
  const [wrapper, setWrapper] = useState("");
  const [binder, setBinder] = useState("");
  const [filler, setFiller] = useState("");
  const [tastingNotes, setTastingNotes] = useState("");
  const [review, setReview] = useState("");
  const [photo, setPhoto] = useState("");

  // Setting up params and history variables to use for routing and editing reviews.
  const params = useParams();
  const history = useHistory();

  // Setting up autofill of input fields when editing a review.
  useEffect(() => {
    if (params.id && props.cigarData.length > 0) {
      const cigar = props.cigarData.find((cigar) => cigar.id === params.id);
      setAuthor(cigar.fields.author);
      setCigar(cigar.fields.cigar);
      setRating(cigar.fields.rating);
      setWrapper(cigar.fields.wrapper);
      setBinder(cigar.fields.binder);
      setFiller(cigar.fields.filler);
      setTastingNotes(cigar.fields.tastingNotes);
      setReview(cigar.fields.review);
      setPhoto(cigar.fields.photo);
    }
  }, [props.cigarData, params.id]); // This will cause useEffect to update whenever cigarData or params change.

  // Handle submit will set up the post and put calls for creating and editing reviews when the form is submitted.
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      // Sets up the fields to be populated by the inputs and send to airtable when the form is submitted.
      author,
      cigar,
      rating: Number(rating),
      wrapper,
      binder,
      filler,
      tastingNotes,
      review,
      photo,
    };

    if (params.id) {
      // If params.id is defined (truthy), we are on the edit review page, so we want to use axios.put.
      const cigarURL = `${baseURL}/${params.id}`;
      await axios.put(cigarURL, { fields }, config);
      history.push(`/cigars/${params.id}`); // Pushes us back to the cigar detail page.
    } else {
      // If params.id is an empty object (falsey) we are on the new review page and want to use axios.post.
      await axios.post(baseURL, { fields }, config);
      history.push("/cigar/list"); // Pushes the user back to the list page.
    }
    props.refresh((prev) => !prev); // Sets the toggle to refresh API call
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label htmlFor="author"></label>
      <input
        name="author"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label htmlFor="cigar"></label>
      <input
        name="cigar"
        type="text"
        value={cigar}
        onChange={(e) => setCigar(e.target.value)}
      />
      <label htmlFor="rating"></label>
      <input
        name="rating"
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <label htmlFor="wrapper"></label>
      <input
        name="wrapper"
        type="text"
        value={wrapper}
        onChange={(e) => setWrapper(e.target.value)}
      />
      <label htmlFor="binder"></label>
      <input
        name="binder"
        type="text"
        value={binder}
        onChange={(e) => setBinder(e.target.value)}
      />
      <label htmlFor="filler"></label>
      <input
        name="filler"
        type="text"
        value={filler}
        onChange={(e) => setFiller(e.target.value)}
      />
      <label htmlFor="tastingNotes"> Tasting Notes: </label>
      <input
        name="tastingNotes"
        type="text"
        value={tastingNotes}
        onChange={(e) => setTastingNotes(e.target.value)}
      />
      <label htmlFor="review"> Review: </label>
      <input
        name="review"
        type="text"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CigarReview;
