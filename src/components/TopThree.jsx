import CigarList from "./CigarList";

function TopThree(props) {
  const sortCigars = (arr) => {
    // sort cigarData by rating to find highest rated cigars
    return (
      arr
        .sort((a, b) => {
          if (b.fields.rating > a.fields.rating) {
            return 1;
          } else if (b.fields.rating < a.fields.rating) {
            return -1;
          } else {
            return 0;
          }
        })
        // pull out the top 3 cigars and put them in a new variable
        .slice(0, 3)
    );
  };

  return (
    <div>
      <ul className="top-three-list">
        {sortCigars(props.cigarData).map((cigar) => (
          <CigarList cigar={cigar} key={cigar.id} />
        ))}
      </ul>
    </div>
  );
}

export default TopThree;
