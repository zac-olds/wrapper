import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL, config } from "../services";
import axios from "axios";

function NewReview() {
  const [author, setAuthor] = useState("");
  const [cigar, setCigar] = useState("");
  const [rating, setRating] = useState("");
  const [wrapper, setWrapper] = useState("");
  const [binder, setBinder] = useState("");
  const [filler, setFiller] = useState("");
  const [tastingNotes, setTastingNotes] = useState("");
  const [review, setReview] = useState("");

  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      author,
      cigar,
      rating,
      wrapper,
      binder,
      filler,
      tastingNotes,
      review,
    };

    await axios.post(baseURL, { fields }, config);
  };

  return (
    <form onSubmit={handleSubmit}>
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
        type="text"
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

export default NewReview;
