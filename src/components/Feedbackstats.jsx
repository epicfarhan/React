function Feedbackstats({ data }) {
  //calculate average rating

  let average =
    data.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / data.length;

  average = average.toFixed(1);
  return (
    <div>
      <h4 className="font-bold text-[20px] pt-2">
        Average Rating : {isNaN(average) ? 0 : average}
      </h4>
    </div>
  );
}

export default Feedbackstats;
