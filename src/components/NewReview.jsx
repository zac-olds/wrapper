import React from "react";

const NewReview = () => {
  return (
    <form>
      <label></label>
      <input name="author" />
      <label></label>
      <input name="cigar" />
      <label></label>
      <input name="rating" />
      <label></label>
      <input name="wrapper" />
      <label></label>
      <input name="binder" />
      <label></label>
      <input name="filler" />
      <label> Tasting Notes: </label>
      <input name="tastingNotes" />
      <label> Review: </label>
      <input name="review" />
    </form>
  );
};

export default NewReview;
