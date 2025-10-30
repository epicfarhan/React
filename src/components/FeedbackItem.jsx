import { useState } from "react";
import Feedbackcard from "./Feedbackcard";

function FeedbackItem({ data, handleDelete }) {
  if (!data || data.length === 0) {
    return <p className="text-center font-bold text-[30px]">no feedback</p>;
  }

  return (
    <div className="pt-20 pl-22 pr-22">
      <h2 className="font-bold ">
        review <span className="text-[#ff3f7f]">({data.length})</span>
      </h2>
      <div className="flex flex-wrap">
        {data.map((item) => (
          <Feedbackcard key={item.id} data={item} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default FeedbackItem;
